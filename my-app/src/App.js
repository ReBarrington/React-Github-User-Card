import React from 'react';
import axios from 'axios';
// import './styles.css';

class App extends React.Component {
  state = {
    githubs: [],
    githubText: ''
  };

  componentDidMount() {
    axios
      .get('https://api.github.com/users/ReBarrington/followers')
      .then(res => {
        // res.data.message
        console.log(res.data, " is res.data, an array of logins")
        this.setState({
          githubs: res.data
        });
      })
      .catch(err => console.log(err.message));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.githubs !== this.state.githubs) {
      console.log('new github array');
    }
  }

  handleChanges = e => {
    this.setState({
      githubText: e.target.value
    });
  };

  fetchGithubs = e => {
    e.preventDefault();
    axios
      .get(`https://github.com/${this.state.githubText}`)
      .then(res => {
        // res.data.message
        this.setState({
          githubs: res.data.message
        });
      })
      .catch(err => console.log(err.message));
  };

  render() {
    return (
      <div className="App">
        <h1>Github</h1>
        <input value={this.state.githubText} onChange={this.handleChanges} />
        <button onClick={this.fetchGithubs}>Fetch Githubs</button>
        <div className="githubs">
          {this.state.githubs.map(github => (
            <h1>{github.username}</h1>
          ))}
        </div>
      </div>
    );
  }
}

export default App;

