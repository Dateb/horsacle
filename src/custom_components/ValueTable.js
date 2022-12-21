import React from "react"
import HorseRow from "./HorseRow";
import horse_data from "../data/horse_data.json"
import "./table.css"

export default class ValueTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            horses: horse_data
        };
    }

  render() {
      const content = (
          <table className="value-table">
              <thead>
                    <tr>
                        <th>ID</th>
                        <th>Gewinnwahrscheinlichkeit %</th>
                        <th>Mindestquote +EV</th>
                    </tr>
              </thead>
              <tbody>
              {
                this.state.horses.map((horse) =>
                <HorseRow
                    id={horse.id}
                    win_probability={(horse.win_probability * 100).toFixed(2)}
                    min_odds={horse.min_odds.toFixed(2)}
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