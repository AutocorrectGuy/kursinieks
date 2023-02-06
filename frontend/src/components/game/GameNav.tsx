import React from 'react'

type Props = {}

const GameNav = (props: Props) => {
	return (
		<div className="text-md grid grid-cols-3 px-4 sm:px-8 h-12 items-center sm:text-xl">
			<div>
				<span className="cursor-pointer font-semibold text-slate-400">
					Easy
				</span>
			</div>
			<div className="whitespace-nowrap text-center text-slate-100">
				Mistakes: 0/3
			</div>
			<div className="text-right font-semibold text-slate-100">
				1:11:27
			</div>
		</div>
	)
}

export default GameNav
