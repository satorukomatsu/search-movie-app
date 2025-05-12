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
        <label htmlFor='keyword'>Keyword</label>
        <input
          type='text'
          id='keyword'
          value={keyword}
          placeholder='Please input keyword to search for'
          onChange={(e) => { handleChangeKeyword(e.target.value) }}
        />
      </div>
      <div className='formGroup'>
        <label htmlFor='releaseYear'>Release Year</label>
        <select
          id='releaseYear'
          value={selectedYear}
          onChange={(e) => { handleChangeYear(e.target.value) }}
        >
          <option value=''>---Please select year---</option>
          {searchYears.map((year) => {
            return <option key={year} value={year}>{year}</option>
          })}
        </select>
      </div>
      <div className='searchButton'>
        <button onClick={() => void searchMovies()}>search</button>
      </div>
    </div>
  )
}

export default SearchFormContent
