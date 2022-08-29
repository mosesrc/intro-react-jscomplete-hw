import React, { Component } from "react";
import { CountManager, CharacterCounter } from "./react.example-2";
import "./App.css";

const todos = [
  { body: "Learn React Fundamentals", done: true },
  { body: "Build a TODOs App", done: false },
  { body: "Build a Game", done: false },
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos,
    };
  }

  render() {
    return (
      <>
        <header>TODO List</header>

        <ul>
          {todos.map((todo) => (
            <li>{todo.body}</li>
          ))}
        </ul>

        <CharacterCounter />
      </>
    );
  }
}
export default App;
