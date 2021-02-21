import logo from "./logo.svg";
import "./App.css";
import People from "./components/People";
import Form from "./components/Form";
import NewPerson from "./components/NewPerson";
import { useState, useReducer } from "react";

import peopleContext from "./context/peopleContext";
import peopleReducer from "./context/peopleReducer";
import { ADD_PERSON } from "./context/types";

function App() {
  const initialState = {
    people: [
      {
        firstName: "John",
        lastName: "Doe",
      },
      {
        firstName: "Jane",
        lastName: "Doe",
      },
    ],
  };

  const [state, dispatch] = useReducer(peopleReducer, initialState);

  const addPerson = (person) => {
    dispatch({
      type: ADD_PERSON,
      payload: person,
    });
  };
  return (
    <peopleContext.Provider
      value={{
        people: state.people,
        addPerson,
      }}
    >
      <div className="container mt-4">
        <div className="row">
          <Form />
          <People />
          <NewPerson />
        </div>
      </div>
    </peopleContext.Provider>
  );
}

export default App;
