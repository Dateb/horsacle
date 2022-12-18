import React from "react"
import HorseRow from "./HorseRow";

export default class ValueTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            horses: [
                {id: 1, win_prob: 0.0, value_thresh: 0.0},
                {id: 2, win_prob: 0.0, value_thresh: 0.0},
                {id: 3, win_prob: 0.0, value_thresh: 0.0},
            ]
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(),5000);
    }

    tick() {
        const random_scores = this.state.horses.map(horse => {
            return Math.random()
        })
        const scores_sum = random_scores.reduce((a, b) => a + b, 0)
        const random_win_probs = random_scores.map(random_score => {
            return ((random_score / scores_sum) * 100).toFixed(2)
        })
        const value_thresh = random_win_probs.map(win_prob => {
            return (100 / win_prob).toFixed(2)
        })

        const n = this.state.horses.length;
        let new_horses = []
        for (let i = 0; i < n; ++i) {
            new_horses[i] = {id: i+1, win_prob: random_win_probs[i], value_thresh: value_thresh[i]};
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
                    <th>Min odds for value</th>
                </tr>
              <tbody>
              {
                this.state.horses.map((horse) =>
                <HorseRow id={horse.id} win_prob={horse.win_prob} value_thresh={horse.value_thresh}/>
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