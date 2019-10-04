import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {


  componentDidMount() {
    axios
    .get('http://localhost:5000/api/players')

    .then(response => console.log (response))
  }

  render(){
  return (
    <div className="App">
     <h1>Soccer</h1>
    </div>
  );
}
}
export default App;
