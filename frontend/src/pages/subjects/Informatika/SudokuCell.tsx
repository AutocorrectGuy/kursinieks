import { useState } from 'react'

type SudokuCellType = {
	currentValue: number | null
	i: number
	targetValue?: number
	isHighlighted?: boolean
	setHighlighted: React.Dispatch<React.SetStateAction<number[]>>
	setSelected: React.Dispatch<React.SetStateAction<number | null>>
	isSelected: boolean
	cellSize: number
	selected: number
	activeCellState: [number | null, React.Dispatch<React.SetStateAction<number | null>>]
}

const SudokuCell = ({
	currentValue,
	targetValue,
	isHighlighted,
	setHighlighted,
	setSelected,
	isSelected,
	i,
	cellSize,
	activeCellState,
}: SudokuCellType) => {
	const [activeCell, setActiveCell] = activeCellState
	const [calculatedBorders] = useState<string>(
		[
			!(i % 9) && 'border-l',
			!((i + 7) % 9) || !((i + 4) % 9) ? 'border-r-[4px]' : 'border-r',
			i < 9 && 'border-t',
			(i > 17 && i < 27) || (i > 44 && i < 54) ? 'border-b-[4px]' : 'border-b',
		].join(' ')
	)

	const cellStyles = {
		width: `${cellSize}px`,
		height: `${cellSize}px`,
		fontSize: `${cellSize * 0.8}px`,
	}

	const cellClass = (currValue: number | null) => {
		let bgColor = ''

		if (isSelected || (activeCell === currValue && activeCell !== null)) {
			bgColor += 'bg-jak-purple-300'
		} else if (isHighlighted) {
			bgColor += 'bg-jak-purple-200'
		} else {
			bgColor += 'bg-white'
		}

		return [
			bgColor,
			'flex items-center justify-center border-slate-500',
			currValue === targetValue ? 'text-black' : 'text-red',
			calculatedBorders,
		].join(' ')
	}

	const handleClick = (i: number) => {
		setHighlighted(() => {
			const rowI = Math.floor(i / 9)
			const rowStartI = rowI * 9
			const colI = i - rowStartI
			const blockStart = rowStartI + colI - 9 * (rowI % 3) - (colI % 3)

			const cellsToHighlight = [
				...[...Array(9)].map((_x, j) => j + rowStartI),
				...[...Array(9)].map((_x, j) => j * 9 + colI),
				...[...Array(9)].map((_x, j) => blockStart + (j % 3) + 3 * (j - (j % 3))),
			]
			return cellsToHighlight
		})
		setSelected(i)
		setActiveCell(currentValue)
	}

	return (
		<input
			type="text"
			value={currentValue ?? ''}
			onChange={(e) => setActiveCell(parseInt(e.target.value))}
			style={cellStyles}
			className={[
				'cursor-pointer select-none text-center caret-transparent outline-none',
				cellClass(currentValue),
			].join(' ')}
			onClick={() => handleClick(i)}
		/>
	)
}

export default SudokuCell
