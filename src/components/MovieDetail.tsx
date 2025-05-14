import { useGenre } from './GenreContext'
import type { Genre } from '../types/movie'
import string from '../const/string'

interface Props {
  result: {
    id: number
    title: string
    poster_path: string | null
    genre_ids: number[]
    release_date: string
  }
}

function MovieDetail ({result}: Props) {
  const posterPath = result.poster_path ?? ''
  const {genresData} = useGenre()
  return (
    <div className='movieDetail'>
      <h3>{result.title}</h3>
      <img className='movieImg' src={`https://image.tmdb.org/t/p/original${posterPath}`} alt={result.title}/>
      <p>
        {
          result.release_date ?
            new Date(result.release_date).toLocaleDateString('ja-JP', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }) :
            string.NO_INFO
        }
      </p>
      <p>
        {
          result.genre_ids.length && genresData?.genres ?
            result.genre_ids.map((genreId, index) => {
              const genre = genresData.genres.find((genre: Genre) => {
                return genre.id === genreId
              })
              return (
                <span key={genre ? genre.id : ''}>
                  {genre ? genre.name : ''}
                  {result.genre_ids.length - 1 > index ? ', ' : ''}
                </span>
              )
            }) :
            string.NO_INFO
        }
      </p>
    </div>
  )
}

export default MovieDetail
