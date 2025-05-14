import type { VercelRequest, VercelResponse } from '@vercel/node'
import type { GenreData } from '../src/types/movie'

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  const apiKey = process.env.TMDB_API_KEY
  if (!apiKey) {
    res.status(500).json({ error: 'TMDB_API_KEY is not set' })
    return
  }
  const url = 'https://api.themoviedb.org/3/genre/movie/list'
  try {
    const response = await fetch(`${url}?api_key=${apiKey}&language=ja`)
    const data = await response.json() as GenreData
    res.status(200).json(data)
    return
  } catch(error) {
    res.status(500).json({error: error})
  }
}