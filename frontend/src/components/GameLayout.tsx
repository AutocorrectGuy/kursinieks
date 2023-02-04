import React from 'react'
import sudokuBoardImg from '../assets/img/sudokuBoard.png'

type Props = {}

const GameLayout = (props: Props) => {
	return (
		<div className="min-h-screen bg-gradient-to-b from-sky-100 to-pink-50 pt-16 font-comic-neue">
			<div className="bg-white p-4">
				<div className="grid grid-cols-3 text-md sm:text-xl text-neutral-800">
					<div>
						<span className="font-bold hidden sm:visible">
							Difficulty:&nbsp;
						</span>
						<span className="cursor-pointer font-extrabold text-neutral-400">
							Easy
						</span>
					</div>
					<div className="text-center font-bold whitespace-nowrap">
						Mistakes: 0/3
					</div>
					<div className="text-right font-extrabold text-neutral-400">
						1:11:27
					</div>
				</div>
			</div>
			<div className="flex h-fit items-center justify-center p-4">
				<img
					src={sudokuBoardImg}
					alt="Sudoku board test img"
					className="h-auto border border-black"
				/>
			</div>
		</div>
	)
}

export default GameLayout
