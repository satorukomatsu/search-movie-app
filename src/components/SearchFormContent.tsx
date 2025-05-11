function SearchFormContent () {
  const searchYears = ['2020', '2021', '2022', '2023', '2024']

  return (
    <div className='formContent'>
      <div className='formGroup'>
        <label htmlFor='keyword'>Keyword</label>
        <input
          type='text'
          id='keyword'
          value=''
          placeholder='Please input keyword to search for'
        />
      </div>
      <div className='formGroup'>
        <label htmlFor='releaseYear'>Release Year</label>
        <select id='releaseYear'>
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
