import React from "react"
import race_ev from "../data/race_ev.json"

import ValueTable from "./ValueTable";
import "./table.css"

export default class ValueContainer extends React.Component {

  render() {
    return (
        <div className="value-container bubble">
            <h1>{race_ev.race.name}</h1>
            <h3>{race_ev.race.date_time}</h3>
            <h3>{race_ev.race.time_until_start}</h3>
            <ValueTable horses={race_ev.horses} race={race_ev.race}/>
        </div>
    );
  }
}