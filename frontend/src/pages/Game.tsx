import GameLayout from '../components/game/GameLayout'
import NavbarLeftSide from '../components/nav/leftSide/NavbarLeftSide'
type Props = {}

const Game = (props: Props) => {
	return (
		<div className="min-h-screen bg-slate-800">
			<div className="flex pl-44">
				<NavbarLeftSide />
				<GameLayout />
			</div>
		</div>
	)
}

export default Game
