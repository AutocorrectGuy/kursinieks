import React from 'react'
import SudokuBoard from './SudokuBoard'
import SudokuKeyboard from './SudokuKeyboard'
import { useState } from 'react'
import defaultGrid from './grid.json'

export type gridEntryType = { value: number; changable: boolean }

const SudokuLayout = () => {
	const [cellSize] = useState<number>(
		Math.floor(Math.min(Math.min(window.innerHeight, window.innerWidth + 24), 700) / 10)
	)

	const [grid, setGrid] = useState<gridEntryType[]>(defaultGrid)
	const [selected, setSelected] = useState<number | null>(null)
	const [activeCell, setActiveCell] = useState<number | null>(null)

	return (
		<div className="flex min-h-screen w-full flex-col items-center justify-center font-source-sans-pro sm:flex-row">
			<SudokuBoard
				cellSize={cellSize}
				grid={grid}
				selectedCellState={[selected, setSelected]}
				activeCellState={[activeCell, setActiveCell]}
			/>
			<SudokuKeyboard
				cellSize={cellSize}
				gridState={[grid, setGrid]}
				selected={selected}
			/>
		</div>
	)
}

export default SudokuLayout
