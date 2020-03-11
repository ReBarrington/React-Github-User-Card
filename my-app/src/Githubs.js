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
    if (props.length > 0) {

        props.map(username => {
        console.log(username, " is username in .map")
            return (
                <div>
                    <h1>Username: {username}</h1>
                </div>
            );
        })
    }

    return (
        <div>

        </div>
    )
}

export default Githubs;
