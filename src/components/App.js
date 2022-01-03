import '../App.css';
import Header from './Header'
import Library from './Library'
import SongCard from './SongCard'
import Playlist from './Playlist'

function App() {
  return (
    <div className="App">
      <Header />
      <Library />
      <SongCard />
      <Playlist />
    </div>
  );
}

export default App;
