import string from '../const/string'

function Loading () {
  return (
    <div className='movieListContents loading'>
      <p>{string.LOADING}</p>
    </div>
  )
}

export default Loading
