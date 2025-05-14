import { useState } from 'react'
import Header from './components/Header'
import SearchFormContent from './components/SearchFormContent'
import MovieListContents from './components/MovieListContents'
import LoadMoreButton from './components/LoadMoreButton'
import './App.css'
import Loading from './components/Loading'
import type { Movie, MovieResponse } from './types/movie'

function App() {
  const [movieList, setMovieList] = useState<Movie[] | null>(null)
  const [keyword, setKeyword] = useState('')
  const [selectedYear, setSelectedYear] = useState('')
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  const [show, setShow] = useState(true)

  const handleChangeKeyword = (value: string) => {
    setKeyword(value)
  }

  const handleChangeYear = (value: string) => {
    setSelectedYear(value)
  }

  const searchMovies = async() => {
    if (!keyword && !selectedYear) {
      alert('映画名とリリース年が入力されていません。入力内容を確認し再度実行してください。')
      return
    }
    try {
      setCurrentPage(0)
      setShow(false)
      if (keyword) {
        const query = selectedYear ?
          `keyword=${keyword}&selectedYear=${selectedYear}` :
          `keyword=${keyword}`
        const res = await fetch(`/api/searchKeyword?${query}`)
        const responseData = await res.json() as MovieResponse
        setMovieList(responseData.results)
        setCurrentPage(responseData.page)
        setTotalPages(responseData.total_pages)
        setShow(true)
        return
      }
      const res = await fetch(`/api/searchYear?selectedYear=${selectedYear}`)
      const responseData = await res.json() as MovieResponse
      setMovieList(responseData.results)
      setCurrentPage(responseData.page)
      setTotalPages(responseData.total_pages)
      setShow(true)
      return
    } catch(error) {
      alert('エラーが発生しました。更新し再度実行してください。')
      console.error(error)
    }
  }

  const loadMoreMovie = async() => {
    const nextPage = currentPage + 1
    setShow(false)
    try {
      if (keyword) {
        const query = selectedYear ?
          `keyword=${keyword}&selectedYear=${selectedYear}&page=${String(nextPage)}` :
          `keyword=${keyword}&page=${String(nextPage)}`
        const res = await fetch(`/api/searchKeyword?${query}`)
        const responseData = await res.json() as MovieResponse
        const movieListDeepCopy = JSON.parse(JSON.stringify(movieList)) as Movie[]
        const newMovieList = movieListDeepCopy.concat(responseData.results)
        setMovieList(newMovieList)
        setCurrentPage(nextPage)
        setShow(true)
        return
      }
      const res = await fetch(
        `/api/searchYear?selectedYear=${selectedYear}&page=${String(nextPage)}`
      )
      const responseData = await res.json() as MovieResponse
      const movieListDeepCopy = JSON.parse(JSON.stringify(movieList)) as Movie[]
      const newMovieList = movieListDeepCopy.concat(responseData.results)
      setMovieList(newMovieList)
      setCurrentPage(nextPage)
      setShow(true)
      return
    } catch(error) {
      alert('エラーが発生しました。更新し再度実行してください。')
      console.error(error)
    }
  }

  return (
    <>
      <Header title='Search Movie App'/>
      <SearchFormContent 
        keyword={keyword}
        selectedYear={selectedYear}
        handleChangeKeyword={handleChangeKeyword}
        handleChangeYear={handleChangeYear}
        searchMovies={searchMovies}
      />
      {show || currentPage > 0 ?
        <MovieListContents movieList={movieList}/> :
        null
      }
      {show ?
        null :
        <Loading/>
      }
      <LoadMoreButton
        currentPage={currentPage}
        totalPages={totalPages}
        loadMore={loadMoreMovie}
      />
    </>
  )
}

export default App
