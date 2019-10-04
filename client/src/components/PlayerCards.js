import React from 'react';


class PlayerCards extends React.Component {

    render() {

        return (

            <div>
                <h1>{this.props.player.name}</h1>
                <h2>From: {this.props.player.country}</h2>
                <h3>Number of searches: {this.props.player.searches}</h3>

            </div>
        )
    }
}

export default PlayerCards;