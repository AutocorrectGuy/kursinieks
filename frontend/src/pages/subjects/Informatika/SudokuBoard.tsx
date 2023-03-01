import SudokuCell from './SudokuCell'
import { useState } from 'react'
import { gridEntryType } from './SudokuLayout'

type SudokuBoardType = {
	cellSize: number
	grid: gridEntryType[]
	selectedCellState: [number | null, React.Dispatch<React.SetStateAction<number | null>>]
	activeCellState: [number | null, React.Dispatch<React.SetStateAction<number | null>>]
}

// const upgradedGrud = grid.map(({ value }) => value)

const SudokuBoard = ({
	cellSize,
	grid,
	selectedCellState,
	activeCellState,
}: SudokuBoardType) => {
	const [highlighted, setHighlighted] = useState<number[]>([])
	const [selected, setSelected] = selectedCellState
	const [activeCell, setActiveCell] = activeCellState
	
	return (
		<div className="grid grid-cols-9 border-[4px] border-slate-600 font-light">
			{grid.map(({ changable, value }, i) => (
				<SudokuCell
					key={`sudoku-cell-${i}`}
					currentValue={value !== -1 ? value : null}
					i={i}
					isHighlighted={highlighted.includes(i)}
					isSelected={i === selected}
					setHighlighted={setHighlighted}
					setSelected={setSelected}
					cellSize={cellSize}
					selected={selected ?? 0}
					activeCellState={[activeCell, setActiveCell]}
				/>
			))}
		</div>
	)
}

export default SudokuBoard
