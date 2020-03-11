import React, { useState, useEffect } from "react";
import axios from "axios";


const App = () => {
  const [githubText, setGithubText] = useState("");

  const [url, setUrl] = useState("https://github.com");
  const [githubs, setGithubs] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then(res => setGithubs(res.data))
      .catch(err => console.log(err.message));
  }, [url]);

  return (
    <div className="App">
      <h1>Githubs</h1>
      <input value={githubText} onChange={e => setGithubs(e.target.value)} />
      <div className="githubs">
        {githubs.map(github => (
            <h1>{github.username}</h1>
        ))}
      </div>
    </div>
  );
};

export default App;
