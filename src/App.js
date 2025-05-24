import React from 'react';
import Addtasks from './components/Addtasks';
import Listtask from './components/Listtask';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Todo Redux App</h1>
      <Addtasks />
      <Listtask />
    </div>
  );
}

export default App;

