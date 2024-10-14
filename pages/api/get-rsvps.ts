import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

const PASSWORD = 'wedding2024' // Change this to a secure password

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const { password } = req.query

    if (password !== PASSWORD) {
      return res.status(401).json({ error: 'Unauthorized' })
    }

    try {
      const filePath = path.join(process.cwd(), 'data', 'rsvps.json')
      
      if (!fs.existsSync(filePath)) {
        return res.status(200).json([])
      }

      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const rsvps = JSON.parse(fileContent)

      res.status(200).json(rsvps)
    } catch (error) {
      console.error('Error reading RSVPs:', error)
      res.status(500).json({ error: 'Error reading RSVPs' })
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}