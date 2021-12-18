import React from "react";
import Counter from "./counter";

const Player = (props) => {
	const { playerScore, temporaryScore, playerNumber } = props;
	return (
		<div className={`player-${playerNumber}`}>
			<h2>Player-{playerNumber} from player</h2>
			<Counter playerNumber={playerNumber} isTemp={false} score={playerScore} />
			<Counter playerNumber={playerNumber} isTemp={true} score={temporaryScore} />
		</div>
	);
};
export default Player;
