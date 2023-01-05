import React from "react"

import horse_icon from '../horse_icon.png';
import green_light from "../green_light.png";
import red_light from "../red_light.png"
import './table.css'

export default class HorseRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            current_odds: props.min_odds_place
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({current_odds: event.target.value});
    }

  render() {
      let race_bets_odds = <td>
              <div>
                  <div>
                    <div>{this.props.racebets_odds}</div>
                  </div>
              </div>
          </td>
      let status_img = <td><img src={red_light} alt="red_light"/></td>
      if (this.props.racebets_odds > this.props.min_odds) {
          race_bets_odds = <td>
              <div>
                  <div>
                    <div className="centered-text">{this.props.racebets_odds}</div>
                    <div>({this.props.racebets_stakes}%)</div>
                  </div>
              </div>
          </td>
          status_img = <td><img src={green_light} alt="green_light"/></td>
      }

    return (
      <tr>
          <img src={horse_icon} className="horse-icon" alt="logo" />
          <td>{this.props.id}</td>
          <td>{this.props.name}</td>
          <td>{this.props.place_probability}%</td>
          <td>
              <form>
                  <label>
                    Gegebene Quote:
                    <input type="text" placeholder={this.state.current_odds} value={this.state.value} onChange={this.handleChange}/>
                  </label>
              </form>
              <div>Kelly-Einsatz: {this.state.current_odds}</div>
          </td>
          {race_bets_odds}
          {status_img}
      </tr>
    );
  }
}