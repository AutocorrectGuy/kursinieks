import React from 'react'
import SudokuBoard from './SudokuBoard'
import SudokuKeyboard from './SudokuKeyboard'
import { useState } from 'react'

type Props = {}

const SudokuLayout = (props: Props) => {
	const [cellSize] = useState<number>(
		Math.floor(Math.min(Math.min(window.innerHeight, window.innerWidth + 24), 700) / 10)
	)

	return (
		<div className="flex min-h-screen w-full flex-col sm:flex-row items-center justify-center font-source-sans-pro">
			<SudokuBoard cellSize={cellSize} />
			<SudokuKeyboard cellSize={cellSize} />
		</div>
	)
}

export default SudokuLayout
