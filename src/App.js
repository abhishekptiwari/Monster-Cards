import React from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <input
          type="search"
          placeholder="search monsters"
          onChange={(e) => {
            this.setState({ searchField: e.target.value }, () => {
              // console.log(this.state); //extra
            });
          }}
        />
        <CardList monsters={filteredMonsters} />{" "}
        {/* monsters={this.state.monsters} */}
      </div>
    );
  }
}

export default App;

// ----------------------------------------
{
  /* <header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>{this.state.String}</p>

<button
  onClick={() => {
    this.setState({ String: "Roma" });
  }} 
>
  Change Text
</button>
</header> */
}
