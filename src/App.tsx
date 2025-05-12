import { useState } from 'react'
import Header from './components/Header'
import SearchFormContent from './components/SearchFormContent'
import MovieListContents from './components/MovieListContents'
import LoadMoreButton from './components/LoadMoreButton'
import './App.css'

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

interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

function App() {
  const [movieList, setMovieList] = useState<Movie[] | null>(null)
  const [keyword, setKeyword] = useState('')
  const [selectedYear, setSelectedYear] = useState('')

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
      if (keyword) {
        const query = selectedYear ?
          `keyword=${keyword}&selectedYear=${selectedYear}` :
          `keyword=${keyword}`
        const res = await fetch(`/api/searchKeyword?${query}`)
        const responseData = await res.json() as MovieResponse
        setMovieList(responseData.results)
        return
      }
      const res = await fetch(`/api/searchYear?selectedYear=${selectedYear}`)
      const responseData = await res.json() as MovieResponse
      setMovieList(responseData.results)
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
      <MovieListContents/>
      <LoadMoreButton/>
    </>
  )
}

export default App
