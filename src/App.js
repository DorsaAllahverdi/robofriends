import React, { useState, useEffect } from 'react';
import 'tachyons';
import './App.css';
import Navigations from './Components/Navigations/Navigations';
import Searchbar from './Components/Searchbar/Searchbar';
import CardList from './Components/CardList/CardList';
import Scroll from './Components/Scroll/Scroll';

function App() {
  const [searchInput, setSearchInput] = useState('')
  const [robots, setRobots] = useState ([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(result => {setRobots(result)})
  },[])

  const onInputChange = (event) => {
    setSearchInput(event.target.value);
  }

  const filteredRobots = robots.filter(robot =>{
    return robot.name.toLowerCase().includes(searchInput.toLowerCase());
  })

  return (
    <div className="App">
      <Navigations />
      <Searchbar onInputChange={onInputChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}

export default App;
