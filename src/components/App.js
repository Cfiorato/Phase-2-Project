import '../App.css';
import Header from './Header'
import Library from './Library'
import SongCard from './SongCard'
import Playlist from './Playlist'
import Home from './Home'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

function App() {
  let [songs, setSongs] = useState([])
  let [liked, setLiked] = useState(false)
  
  
  useEffect(() => {
    fetch('http://localhost:3001/Library')
      .then(resp => resp.json())
      .then(data => setSongs(data))
  }, [])

 const likedSongs = songs.filter(song => {
   return song.liked
 })

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/Library" element={<Library songs={songs}/>}/>
        <Route path="/Details/:id" element={<SongCard liked={liked} setLiked={setLiked} />}/>
        <Route path="/Playlist" element={<Playlist songs={likedSongs} />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
