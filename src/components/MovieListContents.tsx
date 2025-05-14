import MovieDetail from './MovieDetail'
import type { Movie } from '../types/movie'

interface Props {
  movieList: Movie[] | null
}

function MovieListContents ({movieList}: Props) {
  const renderMovieList = (movieList: Movie[] | null) => {
    if (!movieList) {
      return <p>映画名もしくはリリース年を入力し検索してください。</p>
    }
    if (!movieList.length) {
      return <p>映画がヒットしませんでした。入力内容を変更し再度実行してください。</p>
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