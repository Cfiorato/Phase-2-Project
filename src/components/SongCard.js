import React from 'react';
import Card from './Card';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SongCard({ likedChanged, setLikedChanged, userName}) {

const { id } = useParams()
const [currentSong, setCurrentSong] = useState([])

useEffect(() => {
  fetch(`http://localhost:3001/Library/${id}`)
  .then(resp => resp.json())
  .then(data => setCurrentSong(data))
}, [id, likedChanged])


function handleLike(liked) {
  fetch(`http://localhost:3001/Library/${id}`, {
      method: "PATCH",
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({liked: liked})
  }) 
  .then(setLikedChanged(!likedChanged))
}

  
  return(
    <div className='card-details'>
      <Card currentSong={currentSong} handleLike={handleLike} comments={currentSong.comments} userName={userName} />
    </div>
  )
}

export default SongCard