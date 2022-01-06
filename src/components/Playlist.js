import SongTab from "./SongTab"

function Playlist({ songs, userName, loggedIn }) {
 
  return(
    <div>
      <h2>{loggedIn ? `${userName}'s` : 'My'} Playlist</h2>
      <ul id='playlist'>
        {songs.map(song => <SongTab songData={song}/>)}
      </ul>
    </div>
  )
}

export default Playlist