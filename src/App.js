import logo from "./logo.svg";
import "./App.css";
import People from './components/People';
import Form from './components/Form';
import NewPerson from './components/NewPerson';
import { useState,useReducer } from "react";

import PeopleContext from './context/peopleContext';
import peopleReducer from './context/peopleReducer';

function App() {
  const [people, setPeople] = useState([
    {
      firstName: "John",
      lastName: "Doe",
    },
    {
      firstName: "Jane",
      lastName: "Doe",
    },
  ]); 
  
  const addPerson = (person) => {
    setPeople([...people,person]);
  }
  return (
    <div className="container mt-4">
      <div className="row">
          <Form addPerson={addPerson} />
          <People people={people} />
          <NewPerson newestPerson={people[people.length-1]} peopleCount={people.length} />
      </div>
    </div>
  );
}

export default App;
