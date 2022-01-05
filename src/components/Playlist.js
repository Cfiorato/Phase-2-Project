import SongTab from "./SongTab"

function Playlist({ songs }) {
 
  return(
    <div>
      <h2>My Playlist</h2>
      <ul id='playlist'>
        {songs.map(song => <SongTab songData={song}/>)}
      </ul>
    </div>
  )
}

export default Playlist