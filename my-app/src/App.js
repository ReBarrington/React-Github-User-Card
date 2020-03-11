import React from 'react';
import axios from 'axios';
import Githubs from "./Githubs";
// import './styles.css';

class App extends React.Component {
  state = {
    githubs: [],
    githubLogin: ''
  };

  componentDidMount() {
    axios
      .get('https://api.github.com/users/ReBarrington')
      .then(res => {
        // res.data.message
        console.log(res.data, " is res.data")
        this.setState({
          githubs: [res.data],
          githubLogin: res.data.login
        });
      })
      .catch(err => console.log(err.message));

    axios
      .get('https://api.github.com/users/ReBarrington/followers')
      .then(res => {
        console.log(res.data, " is res.data from followers")
        this.setState({
          githubs: [res.data],
          githubLogin: res.data.login
        });
      })
      .catch(err => console.log(err.message));
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('CDU is running');
    if (prevState.githubs !== this.state.githubs) {
      console.log('Githubs state has updated!');
    }
    if (prevProps.id !== this.props.id) {
    }
  }

  fetchGithubs = e => {
    e.preventDefault();
    axios
      .get(`https://github.com/${this.state.githubLogin}`)
      .then(res => {
        // res.data.message
        this.setState({
          githubs: [res.data]
        });
      })
      .catch(err => console.log(err.message));
  };

  render() {
    return (
      <div className="App">
        <h1>Github</h1>
        <div className="githubs">
          {this.state.githubs.map(github => (
            console.log(github, " is github in .map")
            <Githubs 
              name={github.name} 
              bio={github.bio} 
              location={github.location}
              login={github.githubLogin} 
              profilepic={github.avatar_url} 
              followers={github.followers}
              following={github.following}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;

