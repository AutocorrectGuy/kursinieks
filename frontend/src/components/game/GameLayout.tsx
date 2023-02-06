import React from 'react'
import sudokuBoardImg from '../../assets/img/sudokuBoard.png'
import GameNav from './GameNav'
import ActionBtn from './ActionBtn'

type Props = {}

const GameLayout = (props: Props) => {
	return (
		<div className="min-h-screen w-full bg-black bg-opacity-25">
			<div className="flex h-28 items-center justify-end px-4 sm:px-8">
				<ActionBtn
					textValue="New game"
					onClickHandler={() => {
						alert('hello')
					}}
				/>
			</div>
			<GameNav />
			<div className="min-h-[calc(100vh-160px)]">
				<div className="flex h-full min-h-[calc(100vh-160px)] flex-col items-center justify-center p-4 sm:p-8">
					<img
						src={sudokuBoardImg}
						alt="Sudoku board test img"
						className="mb-8 h-auto border border-black"
					/>
					<ActionBtn
						textValue="Restart"
						onClickHandler={() => {
							alert('Uj!!!')
						}}
					/>
				</div>
			</div>
		</div>
	)
}

export default GameLayout
