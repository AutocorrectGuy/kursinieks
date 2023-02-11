import React, { useState } from 'react'

type SudokuKeyboardType = {
	cellSize: number
}

const SudokuKeyboard = ({ cellSize }: SudokuKeyboardType) => {
	return (
		<div
			className="grid w-full grid-cols-9 gap-3 py-4 text-white sm:w-fit sm:max-w-[440px] sm:grid-cols-3 sm:px-8"
			style={{
				fontSize: `${window.innerWidth < 640 ? cellSize * 1.2 : 50}px`,
			}}
		>
			{[...Array(9)].map((x, i) => {
				const btnValue = i + 1
				return (
					<div
						className="cursor-pointer select-none text-center sm:rounded-lg sm:bg-slate-600 sm:px-8 hover:sm:bg-slate-500"
						key={`sudoku-keyboard-btn${i}`}
						onClick={(e) => console.log(btnValue)}
					>
						{btnValue}
					</div>
				)
			})}
		</div>
	)
}

export default SudokuKeyboard
