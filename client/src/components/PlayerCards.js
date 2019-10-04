import React from 'react';
import styled from "styled-components"

const StyledCard = styled.div`
  border: 1px solid black;
  background: #e5e5e5;
  align-items: center;
  width: 20rem;
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 5px 1px 20px grey;
  font-size: 1rem;
  transition: 0.5s;
  color: black;
  &:hover {
    transform: scale(1.05);

`;



class PlayerCards extends React.Component {

    render() {

        return (

            <div className="player-parent-div">
                <StyledCard>
                    <h1>{this.props.player.name}</h1>
                    <h2>From: {this.props.player.country}</h2>
                    <h3>Number of searches: {this.props.player.searches}</h3>
                </StyledCard>
            </div>
        )
    }
}

export default PlayerCards;