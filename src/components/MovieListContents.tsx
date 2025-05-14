import MovieDetail from './MovieDetail'
import type { Movie } from '../types/movie'
import string from '../const/string'

interface Props {
  movieList: Movie[] | null
}

function MovieListContents ({movieList}: Props) {
  const renderMovieList = (movieList: Movie[] | null) => {
    if (!movieList) {
      return <p>{string.PLEASE_INPUT}</p>
    }
    if (!movieList.length) {
      return <p>{string.NOTHING_MOVIE_INFO}</p>
    }
    return (
      movieList.map((result) => {
        return <MovieDetail key={result.id} result={result}/>
      })
    )
  }

  return (
    <div className='movieListContents'>
      {renderMovieList(movieList)}
    </div>
  )
}

export default MovieListContents