import Search from './Search'
import { useState, useEffect } from 'react'
import SongTab from './SongTab'

function Library() {
  let [songs, setSongs] = useState([])
  let [search, setSearch] = useState("")
  useEffect(() => {
    fetch('http://localhost:3001/Library')
      .then(resp => resp.json())
      .then(data => setSongs(data))
  }, [])
  
  function handleSearch(e){
    setSearch(e.target.value)
  }

  let filteredSongs = songs.filter(songData => {
    return(
      songData.artist.toLowerCase().includes(search.toLowerCase())
      || 
      songData.song.toLowerCase().includes(search.toLowerCase())
      || 
      songData.album.toLowerCase().includes(search.toLowerCase())
    )
  })
  
  return(
    <div>
      <h2>Library</h2>
      <Search search={search} onSearch={handleSearch}/>
      <ul className="library">
        {filteredSongs.map(song => <SongTab key={song.id} songData={song} />)}
      </ul>
      
    </div>
  )
}

export default Library