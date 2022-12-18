import React from "react"

export default class HorseRow extends React.Component {

  render() {
    return (
      <tr>
          <td>{this.props.id}</td>
          <td>{this.props.win_prob}</td>
          <td>{this.props.value_thresh}</td>
      </tr>
    );
  }
}