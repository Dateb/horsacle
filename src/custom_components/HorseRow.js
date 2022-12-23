import React from "react"

import horse_icon from '../horse_icon.png';
import './table.css'

export default class HorseRow extends React.Component {

  render() {
      let race_bets_odds = <td className="no-value-cell">{this.props.racebets_odds}</td>
      if (this.props.racebets_odds > this.props.min_odds) {
          race_bets_odds = <td className="value-cell">
              <div>{this.props.racebets_odds}</div>
              <div>({this.props.racebets_stakes}%)</div>
          </td>
      }

    return (
      <tr>
          <img src={horse_icon} className="horse-icon" alt="logo" />
          <td>{this.props.id}</td>
          <td>{this.props.name}</td>
          <td>{this.props.win_probability}%</td>
          <td>{this.props.min_odds}</td>
          {race_bets_odds}
      </tr>
    );
  }
}