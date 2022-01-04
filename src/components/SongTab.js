import { Link } from 'react-router-dom'
import SongCard from './SongCard'

function SongTab({songData}) {
  let { image, artist, song, album } = songData
  return(
    <li className="tabs">
      <img className="cardImage" src={image} alt={song} />
      <h3>{song}</h3>
      <h3>{artist}</h3>
      <p>{album}</p>
      <Link to='/Details'>Details</Link>
    </li>
  )
}


export default SongTab