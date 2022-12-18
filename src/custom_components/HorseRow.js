import React from "react"

export default class HorseRow extends React.Component {

  render() {
    return (
      <div>Horse name: {this.props.name}</div>
    );
  }
}