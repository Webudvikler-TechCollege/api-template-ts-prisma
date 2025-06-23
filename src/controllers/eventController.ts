import { Request, Response } from 'express';
import { prisma } from '../prisma.js';

export const getRecords = async (req: Request, res: Response) => {
  try {
    const data = await prisma.event.findMany({
      select: {
        id: true,
        title: true,
        start: true
      }
    });
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch stages' });
  }
};

export const getRecord = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const data = await prisma.event.findUnique({
      where: { id: Number(id) },
      select: {
        id: true,
        title: true,
        description: true,
        image: true,
        start: true,
        end: true,
        price: true,
        durationMinutes: true,
        event_actor_rels: {
          select: {
            actor: {
              select: {
                id: true,
                name: true
              }
            }
          }
        },
        stages: {
          select: {
            name: true
          }
        },
        genres: {
          select: {
            name: true
          }
        }
      }
    });
    if (!data) res.status(404).json({ error: 'Stage not found' });
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch stage' });
  }
};