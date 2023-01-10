import React from "react"

import horse_icon from '../horse_icon.png';
import green_light from "../green_light.png";
import red_light from "../red_light.png"
import '../css/table.css'

export default class HorseRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            current_odds: props.min_odds,
            stakes: (props.min_odds * props.win_probability * 0.975 - 1) / (props.min_odds - 1)
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            current_odds: event.target.value,
            stakes: (event.target.value * this.props.win_probability * 0.975 - (1 + 0.1)) / (event.target.value - (1 + 0.1))
        });
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
          <td>{this.props.min_odds.toFixed(2)}</td>
          <td>
              <form>
                  <label>
                    Gegebene Quote:
                    <input type="text" placeholder={this.props.min_odds.toFixed(2)} value={this.state.value} onChange={this.handleChange}/>
                  </label>
              </form>
              <div>Kelly-Einsatz: {this.state.stakes}</div>
          </td>
          <td>{race_bets_odds}</td>
          <td>{(this.props.win_probability * 100).toFixed(2)}%</td>
          {status_img}
      </tr>
    );
  }
}