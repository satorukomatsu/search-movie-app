import Header from './components/Header'
import SearchFormContent from './components/SearchFormContent'
import MovieListContents from './components/MovieListContents'
import './App.css'

function App() {
  return (
    <>
      <Header title='Search Movie App'/>
      <SearchFormContent/>
      <MovieListContents/>
      <div>
        <button>Load More</button>
      </div>
    </>
  )
}

export default App
