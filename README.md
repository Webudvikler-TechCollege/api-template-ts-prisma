# Prisma API Template

Et starterprojekt med **Node.js**, **TypeScript**, **Express 5**, og **Prisma ORM**. Perfekt som udgangspunkt for REST API'er med moderne værktøjer og datamodellering.

---

## 🛠 Teknologier

- [TypeScript](https://www.typescriptlang.org/)
- [Express 5](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [TSX](https://github.com/esbuild-kit/tsx)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [bcrypt](https://www.npmjs.com/package/bcrypt)

---

## Kom i gang

### 1. Klon repo og installér afhængigheder

```bash
git clone https://github.com/dit-brugernavn/api-template.git
cd api-template
npm install
```

### 2. Opret .env-fil
```bash
cp .env.example .env
```

### 3. Init database (migration + seed)
```bash
npm run db:init
```
Denne kommando:
- Kører `prisma migrate dev`
- Seeder databasen via `prisma/seed.ts`

### 4. Start serveren
```bash
npm run dev
```