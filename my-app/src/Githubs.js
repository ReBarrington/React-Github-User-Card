import React from "react";
import styled from "styled-components";

const GithubCard = styled.div `
    border: 5px black solid;
    display: flex;
    justify-content: space-around;    
`
const ProfilePic = styled.img `
    width: 300px;
    height: 300px;
`

const Githubs = props => {
    if (props.githubData.length > 0) {
    return (
      props.githubData.map(userData => {
        return (
          <div>
            <h1>Username: {userData.login}</h1>
            <img src={userData.avatar_url} alt="profile" />
          </div>
        );
      })
    );
}
  return (
    <div></div>
 );
}

export default Githubs;

