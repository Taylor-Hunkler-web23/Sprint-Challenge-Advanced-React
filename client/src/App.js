import React from 'react';
import './App.css';
import axios from 'axios';
import PlayerCards from './components/PlayerCards.js'


class App extends React.Component {

  constructor() {
    super();

    this.state = {

      player: []
    }

  }


  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')

      // .then(response => console.log (response))

      .then(response => {
        this.setState({
          player: response.data
        });
      })
      .catch(error => console.log('error'))
  }

  render() {
    return (
      <div className="App">
        <h1>Soccer</h1>
        {this.state.player.map(person => (
          <PlayerCards key={person.id} player={person} />
        ))}

      </div>
    );
  }
}
export default App;
