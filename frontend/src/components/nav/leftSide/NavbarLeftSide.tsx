import { useState } from 'react'
import NavLeftBtn, { NavLeftBtnType } from './NavLeftBtn'
import { useLocation } from 'react-router-dom'
import {
	faDragon,
	faPen,
	faHammer,
	faStar,
} from '@fortawesome/free-solid-svg-icons'

type Props = {}

const NavbarLeftSide = (props: Props) => {
	const [buttonsState, setButtonsState] = useState<
		NavLeftBtnType[]
	>([
		{
			textValue: 'Practice',
			icon: faPen,
			href: '/',
		},
		{
			textValue: 'Adventure',
			icon: faDragon,
			href: '/adventure',
		},
		{ textValue: 'Skills', icon: faStar, href: '/skills' },
		{ textValue: 'Craft', icon: faHammer, href: '/craft' },
	])

	const location = useLocation()
	console.log(location.pathname)

	return (
		<span className="fixed inset-x-0 h-screen w-44 -translate-x-full transition-transform sm:translate-x-0">
			<div className="h-full overflow-y-auto bg-transparent p-4">
				<div className="drop-shadow-black select-none whitespace-nowrap bg-gradient-to-r from-sky-300 to-white bg-clip-text px-2 font-permanent-marker text-2xl text-transparent drop-shadow-md sm:text-4xl">
					Sudoku
				</div>
				{/* <FontAwesomeIcon
					icon={faBars}
					className="h-8 w-8 cursor-pointer px-2 pt-1 text-sky-300"
				/> */}
				<ul className="space-y-2 rounded-md bg-slate-800 pt-4">
					{buttonsState.map((provided, i) => (
						<NavLeftBtn
							{...provided}
							isActive={location.pathname === provided.href}
							key={`nav-left-btn-${i}`}
						/>
					))}
				</ul>
			</div>
		</span>
	)
}

export default NavbarLeftSide
