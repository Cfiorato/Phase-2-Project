import React from 'react';
import Card from './Card';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SongCard({ liked, setLiked }) {

const { id } = useParams()
const [currentSong, setCurrentSong] = useState([])
const [isLiked, setIsLiked] = useState(currentSong.liked)

useEffect(() => {
  fetch(`http://localhost:3001/Library/${id}`)
  .then(resp => resp.json())
  .then(data => setCurrentSong(data))
}, [id])

useEffect(() => {
  fetch(`http://localhost:3001/Library/${id}`, {
      method: "PATCH",
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({liked: isLiked})
  }) 
}, [isLiked]) 

  
  return(
    <div className='card-details'>
      <Card currentSong={currentSong} isLiked={isLiked} setIsLiked={setIsLiked} comments={currentSong.comments} />
    </div>
  )
}

export default SongCard