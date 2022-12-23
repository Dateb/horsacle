import React from "react"
import HorseRow from "./HorseRow";
import "./table.css"

export default class ValueTable extends React.Component {

  render() {
      const content = (
          <table className="value-table">
              <thead>
                <tr>
                    <th></th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Gewinnwahrscheinlichkeit</th>
                    <th>Mindestquote +EV</th>
                    <th>
                        <div>Racebets.de Quote</div>
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
                    win_probability={(horse.win_probability * 100).toFixed(2)}
                    min_odds={horse.min_odds.toFixed(2)}
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