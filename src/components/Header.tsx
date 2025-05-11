interface Props {
  title: string
}

function Header ({title}: Props) {
  return (
    <div className='homeHeader'>
      <h1>{title}</h1>
    </div>
  )
}

export default Header