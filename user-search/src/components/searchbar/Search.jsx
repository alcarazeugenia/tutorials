import "./Search.css";

function Search({ handleChange, placeholder }) {
  return (
    <input
      type="text"
      className="search"
      placeholder={placeholder}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
}

export default Search;
