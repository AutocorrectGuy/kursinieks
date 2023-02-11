import SudokuCell from './SudokuCell'
import { useState } from 'react'

type SudokuBoardType = {
	cellSize: number
}

const grid = [
	-1, 4, 5, 9, -1, -1, 2, 1, -1, 8, -1, 2, 5, 1, 7, 4, -1, -1, 1, -1, 6, -1, -1, 4, -1,
	-1, 3, -1, 8, 4, 7, -1, 2, -1, -1, 1, 2, 5, -1, 3, -1, 1, 6, 4, 9, -1, -1, -1, 4, 5, -1,
	-1, 2, -1, 5, 6, 1, -1, 9, 8, -1, 8, 4, 4, 2, 9, 6, 7, -1, 1, -1, -1, 3, 7, 8, 1, 4, 5,
	-1, -1, -1,
]
const SudokuBoard = ({ cellSize }: SudokuBoardType) => {
	const [highlighted, setHighlighted] = useState<number[]>([])
	const [selected, setSelected] = useState<number | null>(null)

	return (
		<div className="grid grid-cols-9 border-[4px] border-slate-600 font-light">
			{grid.map((num, i) => (
				<SudokuCell
					key={`sudoku-cell-${i}`}
					currentValue={num !== -1 ? num : null}
					i={i}
					isHighlighted={highlighted.includes(i)}
					isSelected={i === selected}
					setHighlighted={setHighlighted}
					setSelected={setSelected}
					cellSize={cellSize}
				/>
			))}
		</div>
	)
}

export default SudokuBoard
