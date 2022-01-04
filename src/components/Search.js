
function Search({search, onSearch}) {
  return(
    <div> 
      <input
        placeholder="Search Here" 
        className="search"
        type="text" 
        value={search} 
        onChange={(e) => onSearch(e)} 
      />
    </div>   
  )
}

export default Search