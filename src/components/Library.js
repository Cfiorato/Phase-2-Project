import Search from './Search'
import { useState, useEffect } from 'react'
import SongTab from './SongTab'

function Library() {
  let [songs, setSongs] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/Library')
      .then(resp => resp.json())
      .then(data => setSongs(data))
  }, [])
  
  
  return(
    <div>
      <h2>Song List Here</h2>
      <ul className="library">
        {songs.map(song => <SongTab key={song.id} songData={song} />)}
      </ul>
      <Search />
    </div>
  )
}

export default Library