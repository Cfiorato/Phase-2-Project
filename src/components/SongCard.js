import React from 'react';
import Card from './Card';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SongCard({ liked, setLiked }) {

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
      <Card currentSong={currentSong} liked={liked} setLiked={setLiked} />
    </div>
  )
}

export default SongCard