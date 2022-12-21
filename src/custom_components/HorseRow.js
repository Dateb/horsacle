import React from "react"

import horse_icon from '../horse_icon.png';
import './table.css'

export default class HorseRow extends React.Component {

  render() {
    return (
      <tr>
          <img src={horse_icon} className="horse-icon" alt="logo" />
          <td>{this.props.id}</td>
          <td>{this.props.name}</td>
          <td>{this.props.win_probability}</td>
          <td>{this.props.min_odds}</td>
      </tr>
    );
  }
}