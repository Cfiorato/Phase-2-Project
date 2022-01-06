
function Header() {
  return(

    <header>
      <img src="https://media.istockphoto.com/vectors/headset-icon-music-templates-vector-id1187826963?k=20&m=1187826963&s=612x612&w=0&h=RwruPmaxyRiNzwxHtllG_Omzwa8ky07EOqR95ZRwWbU=" alt="first.fm"/>
      <h1>first.fm</h1>
      <nav>
        <a className="button" href="/">
          Home 🎧
        </a>
        <a className="button" href="/Library">
          Library 🎧
        </a>
        <a className="button" href="/Playlist">
          Playlist 🎧
        </a>
        <a className="button" href="/Login">
          Login 🎧
        </a>
      </nav>
    </header>
    
  )
}

export default Header