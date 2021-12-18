import React from "react";
import Player from "./players";
import Dice from "./dice.component";
import "./board.css";

class Board extends React.Component {
  state = {
    playerScore1: 0,
    playerScore2: 0,
    temporaryScore1: 0,
    temporaryScore2: 0,
    playerTurn: 1,
    playerWinner: 0,
    display: "none",
    test: 1,
    inputValue: 0,
    pointsToWin: 100,
  };

  ScoreChange = (sum) => {
    if (this.state.playerTurn === 1) {
      if (sum === 0) {
        this.setState({ temporaryScore1: 0 }, this.HoldScore);
      } else {
        this.setState({
          temporaryScore1: this.state.temporaryScore1 + sum,
        });
      }
    }
    if (this.state.playerTurn === 2) {
      if (sum === 0) {
        this.setState({ temporaryScore2: 0 }, this.HoldScore);
      } else {
        this.setState({
         temporaryScore2: this.state.temporaryScore2 + sum,
        });
      }
    }
  };
  HoldScore = () => {
    if (this.state.playerTurn === 1) {
      this.setState(
        {
          playerScore1:
            this.state.playerScore1 + this.state.temporaryScore1,
          playerTurn: 2,
          temporaryScore1: 0,
        },
        this.Winner
      );
    }
    if (this.state.playerTurn === 2) {
      this.setState(
        {
          playerScore2:
            this.state.playerScore2 + this.state.temporaryScore2,
          playerTurn: 1,
          temporaryScore2: 0,
        },
        this.Winner
      );
    }
  };

  onChangeValue = (event) => {
    this.setState({ pointsToWin: event.target.value });
  };
  Winner = () => {
    if (this.state.playerScore1 >= this.state.pointsToWin) {
      this.setState((prevState) => {
        return {
          display: "flex",
          playerWinner: prevState.playerWinner + 1,
        };
      });
    }
    if (this.state.playerScore2 >= this.state.pointsToWin) {
      this.setState((prevState) => {
        return {
          display: "flex",
          playerWinner: prevState.playerWinner + 2,
        };
      });
    }
  };

  Clear = () => {
    this.setState({
      playerScore1: 0,
      playerScore2: 0,
      temporaryScore1: 0,
      temporaryScore2: 0,
      playerTurn: 1,
      display: "none",
      playerWinner: 0,
    });
  };

  render() {
    const {
      playerScore1,
      playerScore2,
      temporaryScore1,
      temporaryScore2,
    } = this.state;
    return (
      <div className="gameContainer">
        <div className="playerContainer">
          <div className="player1">
            <Player
              playerNumber={1}
              temporaryScore={temporaryScore1}
              playerScore={playerScore1}
            />
          </div>
        </div>
        <Dice onChange={this.ScoreChange} />
        <div className="input">
        <input
          type="text"
          vlaue={this.state.inputValue}
          onChange={(event) => this.onChangeValue(event)}
        />{" "}
        <br />

        <button type="button" onClick={this.HoldScore}>
          Hold
        </button>
        </div>
        <div className="winner" style={{ display: this.state.display }}>
          <p>Player {this.state.playerWinner} wins!!!!!</p>
          <button onClick={() => this.Clear()}>Want To Play Again?</button>
        </div>
        <div className="playerContainer">
            <div className="player2">
                <Player
                playerNumber={2}
                temporaryScore={temporaryScore2}
                playerScore={playerScore2}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Board;