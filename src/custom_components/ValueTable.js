import React from "react"
import HorseRow from "./HorseRow";
import "./table.css"

export default class ValueTable extends React.Component {

  render() {
      const race_link = "https://www.racebets.de/de/pferdewetten/race/details/id/" + this.props.race.id
      const content = (
          <table className="value-table">
              <thead>
                <tr>
                    <th></th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Gewinnwahrscheinlichkeit</th>
                    <th>Kelly-Einsatz für Quote</th>
                    <th>
                        <div><a href={race_link}>Racebets.de</a> Quote</div>
                        <div>(Empfohlener Kelly-Einsatz)</div>
                    </th>
                    <th></th>
                </tr>
              </thead>
              <tbody>
              {
                this.props.horses.map((horse) =>
                <HorseRow
                    id={horse.id}
                    name={horse.name}
                    place_probability={(horse.place_probability * 100).toFixed(2)}
                    min_odds_place={horse.min_odds_place.toFixed(2)}
                    racebets_odds={horse.racebets_odds}
                    racebets_stakes={(horse.racebets_stakes * 100).toFixed(2)}
                />
                )}
              </tbody>
          </table>
        );
    return (
        <div>
            {content}
        </div>
    );
  }
}