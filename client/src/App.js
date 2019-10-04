import React from 'react';
import './App.css';
import axios from 'axios';
import PlayerCards from './components/PlayerCards.js'
import Navbar from './components/Navbar.js'


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
        <Navbar/>
        <h1>Players</h1>
        <section className="player-cards">
        {this.state.player.map(person => (
          <PlayerCards key={person.id} player={person} />
        ))}
</section>
      </div>
    );
  }
}
export default App;
