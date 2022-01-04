import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'
import Library from './Library'
import SongCard from './SongCard'
import Playlist from './Playlist'
import Home from './Home'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

function App() {
  let [songs, setSongs] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:3001/Library')
      .then(resp => resp.json())
      .then(data => setSongs(data))
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/Library" element={<Library songs={songs}/>}/>
        <Route path="/Details" element={<SongCard />}/>
        <Route path="/Playlist" element={<Playlist />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
