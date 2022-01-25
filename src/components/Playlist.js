import SongTab from "./SongTab"

function Playlist({ songs, userName, loggedIn, sound }) {

  return(
    <div>
      <h2>{loggedIn ? `${userName}'s` : 'My'} Playlist</h2>
      <ul id='playlist'>
        {songs.map(song => <SongTab key={song.id} songData={song}/>)}
      </ul>

    </div>
  )
}

export default Playlist