import React from "react";
import axios from "axios";
import Githubs from "./Githubs"

class App extends React.Component {
  state = {
    githubData: [],
  };
  
  componentDidMount() {
    axios
      .get('https://api.github.com/users/ReBarrington')
      .then(res => {
        this.setState({
          githubData: [...this.state.githubData, res.data],
        });
      })
      .catch(err => console.log(err.message));

    axios
      .get('https://api.github.com/users/ReBarrington/followers')
      .then(res => {
        this.setState({
          githubData: [...this.state.githubData, ...res.data],
        });
      })
      .catch(err => console.log(err.message));
  }

  render() {
    return (
      <div className="App">
        <h1>Github</h1>
        <div className="githubs">
          <Githubs githubData={this.state.githubData} />
        </div>
      </div>
    );
  }
}

export default App

