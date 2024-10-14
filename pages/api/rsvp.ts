import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

type RSVPData = {
  name: string
  email: string
  attending: 'yes' | 'no'
  guests: number
  dietaryRestrictions?: string
  message?: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const rsvpData: RSVPData = req.body

      // Validate the data
      if (!rsvpData.name || !rsvpData.email || !rsvpData.attending) {
        return res.status(400).json({ error: 'Missing required fields' })
      }

      // Save the RSVP data to a JSON file
      const filePath = path.join(process.cwd(), 'data', 'rsvps.json')
      let rsvps: RSVPData[] = []

      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf-8')
        rsvps = JSON.parse(fileContent)
      }

      rsvps.push(rsvpData)
      fs.writeFileSync(filePath, JSON.stringify(rsvps, null, 2))

      res.status(200).json({ message: 'RSVP submitted successfully' })
    } catch (error) {
      console.error('Error saving RSVP:', error)
      res.status(500).json({ error: 'Error saving RSVP' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}