import '../App.css';
import Header from './Header'
import Library from './Library'
import SongCard from './SongCard'
import Playlist from './Playlist'
import Home from './Home'
import LoginForm from './LoginForm'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

function App() {
  let [songs, setSongs] = useState([])
  let [userName, setUserName] = useState('')
  let [loggedIn, setLoggedIn] = useState(false)
  const [likedChanged, setLikedChanged] = useState(false)
  
  
  useEffect(() => {
    fetch('http://localhost:3001/Library')
      .then(resp => resp.json())
      .then(data => setSongs(data))
  }, [likedChanged])
  

  function handleLogin(name, status){
    setUserName(name)
    setLoggedIn(status)
  }
 const likedSongs = songs.filter(song => {
   return song.liked
 })

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/Library" element={<Library songs={songs}/>}/>
        <Route path="/Details/:id" element={<SongCard likedChanged={likedChanged} userName={userName} setLikedChanged={setLikedChanged} />}/>
        <Route path="/Playlist" element={<Playlist songs={likedSongs} userName={userName} loggedIn={loggedIn} />}/>
        <Route path="/Login" element={<LoginForm handleLogin={handleLogin} loggedIn={loggedIn} userName={userName} />}/>
        <Route path="/" element={<Home userName={userName}/>}/>
      </Routes>
    </div>
  );
}

export default App;
