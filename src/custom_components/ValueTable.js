import React from "react"
import HorseRow from "./HorseRow";

export default class ValueTable extends React.Component {
  render() {
    return (
        <div>
          <HorseRow name="Heinz"/>
          <HorseRow name="Karl"/>
          <HorseRow name="Peter"/>
        </div>
    );
  }
}