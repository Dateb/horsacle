import React from "react"

export default class HorseRow extends React.Component {

  render() {
    return (
      <tr>
          <td>{this.props.id}</td>
          <td>{this.props.win_probability}</td>
          <td>{this.props.min_odds}</td>
      </tr>
    );
  }
}