import React from "react"

export default class HorseRow extends React.Component {

  render() {
    return (
      <div>{this.props.id}:{this.props.win_prob}</div>
    );
  }
}