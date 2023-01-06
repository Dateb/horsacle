import React from "react"

import ValueTable from "./ValueTable";
import "../css/table.css"


export default class ValueContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        setInterval(() => this.update_race_ev(),2000)
    }

    update_race_ev() {
        fetch('race_ev.json'
            ,{
              headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
            }).then(function(response) {
                return response.json();
            }).then(function(myJson) {
                return myJson
            }
            ).then(result => this.setState({
                race_name: result.race.name,
                race_date_time: result.race.date_time,
                race_time_until_start: result.race.time_until_start,
                race: result.race,
                horses: result.horses,
            }
        ))
    }

    render() {
        console.log(this.state.race_name)
        console.log(this.state.race_date_time)
        console.log(this.state.horses)
        console.log(this.state.race)
        if (Object.keys(this.state).length === 0) {
            return (<div>Loading...</div>)
        }
    return (
        <div className="value-container bubble">
            <h1>{this.state.race_name}</h1>
            <h3>{this.state.race_date_time}</h3>
            <h3>{this.state.race_time_until_start}</h3>
            <ValueTable horses={this.state.horses} race={this.state.race}/>
        </div>
    );
  }
}