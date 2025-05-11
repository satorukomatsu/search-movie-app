import MovieDetail from './MovieDetail'
import mockData from '../mockData.json'

function MovieListContents () {
  return (
    <div className='movieListContents'>
      {mockData.results.map((result) => {
        return <MovieDetail key={result.id} result={result}/>
      })}
    </div>
  )
}

export default MovieListContents