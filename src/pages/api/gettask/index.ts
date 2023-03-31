import { prisma } from '@/src/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  async function main() {
    const allTask = await prisma.task.findMany()
    console.log(allTask)
  }

  const task = main()

  return res.status(201).json({ task })
}
