import React, { useState } from 'react'
import { gridEntryType } from './SudokuLayout'

type SudokuKeyboardType = {
	cellSize: number
	gridState: [gridEntryType[], React.Dispatch<React.SetStateAction<gridEntryType[]>>]
	selected: number | null
}

const SudokuKeyboard = ({ cellSize, gridState, selected }: SudokuKeyboardType) => {
	const fontSize = `${window.innerWidth < 640 ? cellSize * 1.2 : 50}px`

	return (
		<div
			className="grid w-full grid-cols-9 gap-3 py-4 text-white sm:w-fit sm:max-w-[440px] sm:grid-cols-3 sm:px-8"
			style={{ fontSize }}
		>
			{[...Array(9)].map((x, i) => {
				const btnValue = i + 1

				return (
					<div
						className="cursor-pointer select-none text-center sm:rounded-lg sm:bg-jak-gray-700 sm:px-8 hover:sm:bg-jak-gray-800"
						key={`sudoku-keyboard-btn${i}`}
						onClick={() => {
							
							gridState[1]((prev) => {
								console.log(`hello, I am the index man ${selected}`)
								console.log(`hello, I am the value man ${btnValue}`)
								prev[selected as number] = {
									value: btnValue,
									changable: prev[selected as number].changable,
								}
								console.log(prev)
								return prev
							})
						}}
					>
						{btnValue}
					</div>
				)
			})}
		</div>
	)
}

export default SudokuKeyboard
