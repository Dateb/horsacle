import React from "react"
import HorseRow from "./HorseRow";

export default class ValueTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            horses: [
                {id: 1, win_prob: 0.25},
                {id: 2, win_prob: 0.5},
                {id: 3, win_prob: 0.25},
            ]
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(),2000);
    }

    tick() {
        const random_scores = this.state.horses.map(horse => {
            return Math.random()
        })
        const scores_sum = random_scores.reduce((a, b) => a + b, 0)
        const random_win_probs = random_scores.map(random_score => {
            return ((random_score / scores_sum) * 100).toFixed(2)
        })

        const n = this.state.horses.length;
        let new_horses = []
        for (let i = 0; i < n; ++i) {
            new_horses[i] = {id: i+1, win_prob: random_win_probs[i]};
        }

        this.setState({
            horses: new_horses
        });
    }

  render() {
      const content = (
          <table>
                <tr>
                    <th>Horse ID</th>
                    <th>Win probability</th>
                </tr>
              <tbody>
              {
                this.state.horses.map((horse) =>
                <HorseRow id={horse.id} win_prob={horse.win_prob}/>
                )}
              </tbody>
          </table>
        );
    return (
        <div>
            {content}
        </div>
    );
  }
}