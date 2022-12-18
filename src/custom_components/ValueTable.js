import React from "react"
import HorseRow from "./HorseRow";

export default class ValueTable extends React.Component {
  render() {
      const content = (
          <ul>
            {
                this.props.horses.map((horse) =>
                <li><HorseRow id={horse.id} win_prob={horse.win_prob}/></li>
                )}
          </ul>
        );
    return (
        <div>
            {content}
        </div>
    );
  }
}