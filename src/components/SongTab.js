import { Link } from 'react-router-dom'


function SongTab({songData}) {
  let { image, artist, song, album, id } = songData
  
  const path = `/Details/${id}`
  
  return(
    <li className="tabs">
      <img className="cardImage" src={image} alt={song} />
      <h3>{song}</h3>
      <h3>{artist}</h3>
      <p>{album}</p>
      <Link to={path}>Details</Link>
    </li>
  )
}


export default SongTab