import Search from './Search'
import { useState, useEffect } from 'react'
import SongTab from './SongTab'

function Library( { songs }) {
  
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