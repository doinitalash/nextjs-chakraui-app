import fs from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

export async function GET() {
  const imageDirectory = path.join(process.cwd(), 'public/images/aboutMasonry')
  const filenames = fs.readdirSync(imageDirectory)
  const imagePaths = filenames.map((name) => `/images/aboutMasonry/${name}`)

  return NextResponse.json(imagePaths)
}
