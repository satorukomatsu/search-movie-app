import genresData from '../genresData.json'

interface Props {
  result: {
    id: number
    title: string
    poster_path: string | null
    genre_ids: number[]
    release_date: string
  }
}

interface Genre {
  id: number
  name: string
}

function MovieDetail ({result}: Props) {
  const posterPath = result.poster_path ?? ''
  return (
    <div className='movieDetail'>
      <h3>{result.title}</h3>
      <img className='movieImg' src={`https://image.tmdb.org/t/p/original${posterPath}`} alt={result.title}/>
      <p>
        ジャンル: {
          result.genre_ids.length ?
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
            '情報なし'
        }
      </p>
      <p>
        リリース: {
          result.release_date ?
            new Date(result.release_date).toLocaleDateString('ja-JP', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }) :
            '情報なし'
        }
      </p>
    </div>
  )
}

export default MovieDetail
