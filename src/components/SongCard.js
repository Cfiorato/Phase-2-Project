import React from 'react';
import Card from './Card';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SongCard() {

const { id } = useParams()
const [currentSong, setCurrentSong] = useState([])

useEffect(() => {
  fetch(`http://localhost:3001/Library/${id}`)
  .then(resp => resp.json())
  .then(data => setCurrentSong(data))
}, [id])

console.log(currentSong)
  
  return(
    <div>
      <h2>Song Card Here</h2>
      <Card song={currentSong} />
    </div>
  )
}

export default SongCard