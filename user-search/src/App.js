import { useState, useEffect } from "react";
import Search from "./components/searchbar/Search";
import Users from "./components/users/Users";
import "./App.css";

function App() {
  const [monsters, setMonsters] = useState([]);
  const { name } = monsters;
  const [searchString, setSearchString] = useState("");
  const [monsterSearched, setMonsterSearched] = useState([]);

  useEffect(() => {
    const callAPI = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setMonsters(data);
    };

    callAPI();
  }, []);

  useEffect(() => {
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchString.toLowerCase())
    );
    setMonsterSearched(filteredMonsters);
  }, [searchString]);

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <Search handleChange={setSearchString} placeholder="Search Monsters" />
      {searchString === "" ? (
        <Users monsters={monsters} />
      ) : (
        <Users monsters={monsterSearched} />
      )}
    </div>
  );
}

export default App;
