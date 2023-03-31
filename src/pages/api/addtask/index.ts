import { prisma } from '@/src/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { task } = req.body

  await prisma.task.create({
    data: {
      task,
    },
  })

  return res.status(201).json({ task })
}
