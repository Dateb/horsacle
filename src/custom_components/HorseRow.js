import React from "react"

export default class HorseRow extends React.Component {

  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.win_prob}</td>
      </tr>
    );
  }
}