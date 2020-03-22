import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Anthony", age: 30 },
      { name: "Mallory", age: 28 },
      { name: "Ruger", age: 3 },
      { name: "Coco", age: 8 }
    ],
    otherState: "Some other value"
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: "Antdawg", age: 31 },
        { name: "Mallory", age: 28 },
        { name: "Ruger", age: 3 },
        { name: "Coco", age: 10 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Antdawg", age: 31 },
        { name: "Malal", age: 28 },
        { name: "Ruger", age: 3 },
        { name: event.target.value, age: 10 }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <p>This is really working!</p>
        <button style={style} onClick={() => this.switchNameHandler("Antman!")}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My Hobbies: Coding
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
        <Person
          name={this.state.persons[3].name}
          age={this.state.persons[3].age}
          changed={this.nameChangedHandler}
        />
      </div>
    );
  }
}

export default App;
