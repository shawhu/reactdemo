import "./App.css";
import Table from "./Table";
import Form from "./Form";
import React, { Component } from "react";

class App extends Component {
  state = {
    characters: [
      {
        name: "Harry Xiao",
        job: "PM",
      },
      {
        name: "John Doe",
        job: "Dev",
      },
      {
        name: "王大狗",
        job: "Art",
      },
    ],
  };
  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    });
  };
  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] });
  };
  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
