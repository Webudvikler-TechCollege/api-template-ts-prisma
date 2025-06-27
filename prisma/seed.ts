import { PrismaClient } from '@prisma/client';
import path from 'path';
import { readdir, readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { parse } from 'csv-parse/sync';
import { fieldTypes } from './types';

const prisma = new PrismaClient();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const directory = path.join(__dirname, 'csv');

async function processCsvFiles() {
  const files = await readdir(directory)
  for (const file of files.filter(f => f.endsWith('.csv'))) {

    const fullpath = path.join(directory, file)
    const content = await readFile(fullpath, 'utf-8')

    const rawRecords = parse(content, {
      columns: true,
      skip_empty_lines: true
    });

    const model = path.basename(file, '.csv');
    const cleanedData: Record<string, any>[] = rawRecords.map((row: Record<string, any>) => castRow(model, row));

    await seedData(model as ModelName, cleanedData);
  }
}

processCsvFiles().catch(console.error);

type ModelName = Exclude<keyof typeof prisma,
  | '$connect'
  | '$disconnect'
  | '$on'
  | '$transaction'
  | '$use'
  | '$executeRaw'
  | '$executeRawUnsafe'
  | '$queryRaw'
  | '$queryRawUnsafe'
>;

const seedData = async (model: ModelName, data: any[]) => {
  try {
    const modelName = String(model);
    const cleanedData = data.map((row) => castRow(modelName, row));

    await (prisma[model] as any).createMany({
      data: cleanedData,
      skipDuplicates: true
    });
  } catch (error) {
    console.error(`Failed to seed ${String(model)}:`, error);
  }
};

const castRow = (model: string, row: Record<string, any>) => {
  const schema = fieldTypes[model]
  const converted: Record<string, any> = {}

  for (const [key, value] of Object.entries(row)) {
    const type = schema[key] || 'string'
    const val = value?.toString().trim()

    if (type === 'number') {
      converted[key] = Number(val)
    } else if (type === 'boolean') {
      converted[key] = Boolean(val)
    } else {
      converted[key] = val
    }
  }

  return converted
};