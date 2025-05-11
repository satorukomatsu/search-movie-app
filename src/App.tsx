import Header from './components/Header'
import SearchFormContent from './components/SearchFormContent'
import './App.css'
import mockData from './mockData.json'
import genresData from './genresData.json'

interface Genre {
  id: number
  name: string
}

function App() {
  return (
    <>
      <Header title='Search Movie App'/>
      <SearchFormContent/>
      <div className='movieListContents'>
        {mockData.results.map((result) => {
          return (
            <div key={result.id} className='movieDetail'>
              <h3>{result.title}</h3>
              <img className='movieImg' src={`https://image.tmdb.org/t/p/original${result.poster_path}`} alt={result.title}/>
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
        })}
      </div>
      <div>
        <button>Load More</button>
      </div>
    </>
  )
}

export default App
