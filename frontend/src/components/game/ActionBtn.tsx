import React from 'react'

type Props = {
	textValue: string
	onClickHandler?: (
		e?: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => void
}

const ActionBtn = ({
	textValue,
	onClickHandler,
}: Props) => {
	return (
		<button
			className="h-fit cursor-pointer overflow-hidden rounded-md border-b-[4px] border-b-sky-800 bg-sky-800 font-permanent-marker text-lg text-white shadow-md active:translate-y-[2px] sm:text-2xl"
			onClick={(e) => { onClickHandler && onClickHandler(e)}}
		>
			<div className="overflow-hidden rounded-md bg-gradient-to-r from-blue-500 to-sky-500 px-4 py-2">
				{textValue}
			</div>
		</button>
	)
}

export default ActionBtn
