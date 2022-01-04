
function Search({search, onSearch}) {
  return(
    <div> 
      <input
        placeholder="Song, Artist, or Album" 
        className="search"
        type="text" 
        value={search} 
        onChange={(e) => onSearch(e)} 
      />
    </div>   
  )
}

export default Search