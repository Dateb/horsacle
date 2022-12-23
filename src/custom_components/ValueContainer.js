import React from "react"
import race_ev from "../data/race_ev.json"

import ValueTable from "./ValueTable";
import "./table.css"

export default class ValueContainer extends React.Component {

  render() {
      const race_link = "https://www.racebets.de/de/pferdewetten/race/details/id/" + race_ev.race.id
    return (
        <div className="value-container bubble">
            <h1><a href={race_link}>{race_ev.race.name}</a></h1>
            <h3>{race_ev.race.date_time}</h3>
            <ValueTable horses={race_ev.horses}/>
        </div>
    );
  }
}