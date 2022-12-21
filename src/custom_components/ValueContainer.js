import React from "react"
import race_ev from "../data/race_ev.json"

import ValueTable from "./ValueTable";
import "./table.css"

export default class ValueContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            race_ev: race_ev
        };
    }

  render() {
    return (
        <div>
            <h1>{this.state.race_ev.race.name}</h1>
            <h3>{this.state.race_ev.race.date_time}</h3>
            <ValueTable horses={this.state.race_ev.horses}/>
        </div>
    );
  }
}