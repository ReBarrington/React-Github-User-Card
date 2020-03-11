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
    console.log(props, " is props for Githubs")
    return (
        <GithubCard className="githubs-container">
            <div className="left-side">
                <h1>{props.name}</h1>
                <h2>Username: {props.login}</h2>
                <p>{props.bio}</p>
                <p>Location: {props.location}</p>
                <p>Followers: {props.followers}</p>
                <p>Following: {props.following}</p>
            </div>
            <ProfilePic src={props.profilepic}></ProfilePic>
        </GithubCard>
    )
}

export default Githubs;