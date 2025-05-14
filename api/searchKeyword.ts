/* eslint-disable @stylistic/max-len */
import type { VercelRequest, VercelResponse } from '@vercel/node'
import type { MovieResponse } from '../src/types/movie'

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  const keyword = req.query.keyword
  const selectedYear = req.query.selectedYear
  const page = req.query.page
  const apiKey = process.env.TMDB_API_KEY
  if (!apiKey) {
    res.status(500).json({ error: 'TMDB_API_KEY is not set' })
    return
  }
  if (!keyword) {
    res.status(500).json({ error: 'keyword is required' })
    return
  }
  if (typeof keyword !== 'string') {
    res.status(500).json({ error: 'keyword is invalid value' })
    return
  }
  if (selectedYear && typeof selectedYear !== 'string') {
    res.status(500).json({ error: 'selected year is invalid value' })
    return
  }
  const baseUrl = 'https://api.themoviedb.org/3/search/movie'
  try {
    if (selectedYear) {
      const url = page && typeof page === 'string' ?
        `${baseUrl}?api_key=${apiKey}&query=${keyword}&primary_release_year=${selectedYear}&language=ja&page=${page}` :
        `${baseUrl}?api_key=${apiKey}&query=${keyword}&primary_release_year=${selectedYear}&language=ja`
      const response = await fetch(url)
      const data = await response.json() as MovieResponse
      res.status(200).json(data)
      return
    }
    const url = page && typeof page === 'string' ?
      `${baseUrl}?api_key=${apiKey}&query=${keyword}&language=ja&page=${page}` :
      `${baseUrl}?api_key=${apiKey}&query=${keyword}&language=ja`
    const response = await fetch(url)
    const data = await response.json() as MovieResponse
    res.status(200).json(data)
    return
  } catch(error) {
    res.status(500).json({ error: error })
  }
}
