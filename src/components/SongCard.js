import React from 'react';
import Card from './Card'

function SongCard({ songs }) {
const songCard = songs.map(song => {
  return <Card img={song.image} title={song.song} artist={song.artist} video={song.video} album={song.album}
  genre={song.genre} producers={song.producers} lyrics={song.lyrics} released={song.released} isLiked={song.liked} comments={song.comments}/>
})
  
  return(
    <div>
      <h2>Song Card Here</h2>
      {songCard}
    </div>
  )
}

export default SongCard