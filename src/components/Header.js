import { Link } from 'react-router-dom' 

function Header() {
  return(

    <header>
      <img src="https://media.istockphoto.com/vectors/headset-icon-music-templates-vector-id1187826963?k=20&m=1187826963&s=612x612&w=0&h=RwruPmaxyRiNzwxHtllG_Omzwa8ky07EOqR95ZRwWbU=" alt="first.fm"/>
      <h1>first.fm</h1>
      <nav>
        <Link className="button" to="/">
          Home 🎧
        </Link>
        <Link className="button" to="/Library">
          Library 🎧
        </Link>
        <Link className="button" to="/Playlist">
          Playlist 🎧
        </Link>
        <Link className="button" to="/Login">
          Login 🎧
        </Link>
      </nav>
    </header>
    
  )
}

export default Header