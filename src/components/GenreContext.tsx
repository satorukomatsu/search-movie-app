import React, { createContext, useContext, useEffect, useState } from 'react'

interface Genre {
  id: number
  name: string
}

interface GenreData {
  genres: Genre[]
}

interface GenreDataProps {
  genresData: GenreData | null
}

const GenreContext = createContext<GenreDataProps | undefined>(undefined)

export const useGenre = () => {
  const context = useContext(GenreContext)
  if (!context) {
    throw new Error('useUser must be used within UserProvider')
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

