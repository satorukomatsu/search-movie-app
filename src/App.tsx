import Header from './components/Header'
import SearchFormContent from './components/SearchFormContent'
import MovieListContents from './components/MovieListContents'
import LoadMoreButton from './components/LoadMoreButton'
import './App.css'

function App() {
  return (
    <>
      <Header title='Search Movie App'/>
      <SearchFormContent/>
      <MovieListContents/>
      <LoadMoreButton/>
    </>
  )
}

export default App
