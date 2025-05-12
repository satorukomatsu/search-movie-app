import MovieDetail from './MovieDetail'

interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  popularity: number;
  adult: boolean;
  video: boolean;
}

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