import string from '../const/string'

interface Props {
  keyword: string
  selectedYear: string
  handleChangeKeyword: (keyword: string) => void
  handleChangeYear: (selectedYear: string) => void
  searchMovies: () => Promise<void>
}

function SearchFormContent ({
  keyword,
  selectedYear,
  handleChangeKeyword,
  handleChangeYear,
  searchMovies
}: Props) {
  const searchYears = ['2020', '2021', '2022', '2023', '2024']

  return (
    <div className='formContent'>
      <div className='formGroup'>
        <label htmlFor='keyword'>{string.KEYWORD}</label>
        <input
          type='text'
          id='keyword'
          value={keyword}
          placeholder={string.INPUT_KEYWORD}
          onChange={(e) => { handleChangeKeyword(e.target.value) }}
        />
      </div>
      <div className='formGroup'>
        <label htmlFor='releaseYear'>{string.RELEASE_YEAR}</label>
        <select
          id='releaseYear'
          value={selectedYear}
          onChange={(e) => { handleChangeYear(e.target.value) }}
        >
          <option value=''>{string.SELECT_YEAR}</option>
          {searchYears.map((year) => {
            return <option key={year} value={year}>{year}</option>
          })}
        </select>
      </div>
      <div className='searchButton'>
        <button onClick={() => void searchMovies()}>{string.SEARCH}</button>
      </div>
    </div>
  )
}

export default SearchFormContent
