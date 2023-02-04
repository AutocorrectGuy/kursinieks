import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

type Props = {}

const Navbar = (props: Props) => {
	return (
		<div className="absolute inset-x-0 flex h-16 items-center justify-between border-b border-b-neutral-200 bg-white px-8 text-center font-bold">
			<div className="flex items-center">
				<FontAwesomeIcon
					icon={faBars}
					className="h-full w-8 cursor-pointer px-2 pt-1 text-purple-600"
				/>
				<span className="drop-shadow-black select-none bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text p-2 pl-4 font-permanent-marker text-4xl text-transparent drop-shadow-md">
					Sudoku Pets
				</span>
			</div>
			<div className="cursor-pointer bg-gradient-to-r from-blue-500 to-sky-500 bg-clip-text p-2 font-permanent-marker text-2xl text-transparent hover:from-blue-600 hover:to-sky-600">
				New Game
			</div>
		</div>
	)
}

export default Navbar
