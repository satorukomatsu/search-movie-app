import React, { createContext, useContext, useEffect, useState } from 'react'
import type { GenreData } from '../types/movie'
import errorMsg from '../const/errorMsg'

interface GenreDataProps {
  genresData: GenreData | null
}

const GenreContext = createContext<GenreDataProps | undefined>(undefined)

export const useGenre = () => {
  const context = useContext(GenreContext)
  if (!context) {
    throw new Error(errorMsg.MUST_USE_PROVIDER)
  }
  return context
}

export const GenreProvider = ({children}: {children: React.ReactNode}) => {
  const [genresData, setGenresData] = useState<GenreData | null>(null)

  useEffect(() => {
    const fetchGenre = async() => {
      const res = await fetch('/api/genre')
      const data = await res.json() as GenreData
      setGenresData(data)
    }
    void fetchGenre()
  }, [])

  return (
    <GenreContext.Provider value={{genresData}}>
      {children}
    </GenreContext.Provider>
  )
}

