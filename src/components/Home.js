
function Home({ userName }) {
  return(
    <div className="home">
      <div className="greeting">
        <h1>{userName ? `Welcome Back, ${userName}!` : "Welcome to first.fm"}</h1>
        <h3>Find your favorite song and learn anything you'd like to know about it</h3>
        <p>Add comments and even add songs to your own personal playlist</p>
      </div>
    </div>
  )
}

export default Home