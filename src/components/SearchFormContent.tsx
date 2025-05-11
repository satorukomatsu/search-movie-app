import { useState } from 'react'

function SearchFormContent () {
  const [keyword, setKeyword] = useState('')
  const [selectedYear, setSelectedYear] = useState('')

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
          onChange={(e) => { setKeyword(e.target.value) }}
        />
      </div>
      <div className='formGroup'>
        <label htmlFor='releaseYear'>Release Year</label>
        <select
          id='releaseYear'
          value={selectedYear}
          onChange={(e) => { setSelectedYear(e.target.value) }}
        >
          <option value=''>---Please select year---</option>
          {searchYears.map((year) => {
            return <option key={year} value={year}>{year}</option>
          })}
        </select>
      </div>
      <div className='searchButton'>
        <button>search</button>
      </div>
    </div>
  )
}

export default SearchFormContent
