import React from "react"

import ValueTable from "./ValueTable";
import "../css/table.css"


export default class ValueContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bets: []
        }

        this.updateBets = this.updateBets.bind(this);
    }

    updateBets() {
        fetch('http://127.0.0.1:5000/next_race').then(function(response) {
                return response.json();
            }).then(function(myJson) {
                console.log(myJson)
                return myJson
            }).then(result => this.setState({
                bets: result,
            })
        )
    }

    render() {
        const bets = this.state.bets.map((bet) =>
            <div>{bet.horse_number}/{bet.horse_name}/{bet.stakes_fraction}/{bet.win_betting_odds}</div>
        )
    return (
        <div className="value-container bubble">
            <button onClick={this.updateBets}>Aktualisiere Wettschein</button>
            <div>{bets}</div>
        </div>
    );
  }
}