import '../App.css';
import Header from './Header'
import Library from './Library'
import SongCard from './SongCard'
import Playlist from './Playlist'
import { useEffect, useState } from 'react';

function App() {
  let [songs, setSongs] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/Library')
      .then(resp => resp.json())
      .then(data =>  setSongs(data))
  }, [])


  return (
    <div className="App">
      <Header />
      <Library songs={songs} />
      <SongCard songs={songs}/>
      <Playlist />
    </div>
  );
}

export default App;
