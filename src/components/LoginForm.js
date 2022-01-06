

function LoginForm({ handleLogin, loggedIn, userName }) {
  
  
  function onLogin(e) {
    e.preventDefault();
    handleLogin(e.target.username.value, true)
  }

  function onLogout() {
    handleLogin('', false)
  }
  console.log(loggedIn)

  return(
  !loggedIn ? 
   <div className="login">
      <h2>Login to first.fm</h2>
      <form className="logForm" onSubmit={(e) => onLogin(e)}>
        <label>
          Your Name
          <input type="text" name="username"/>
        </label>
        <input type="submit" value="Login" />
      </form>
    </div>
  :
  <div className="login">
    <h2>You're Signed In As {userName}</h2>
    <button className="logout" onClick={onLogout}>
      Sign Out
    </button>
  </div>
  )
}

export default LoginForm