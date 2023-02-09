import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { pagesOptions, NavOptionInterface } from '../../PagesOptions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import NavLeftBtn from './NavLeftBtn'

const NavbarLeftSide = () => {
	const [buttonsState] = useState<NavOptionInterface[]>(pagesOptions)
	const [navOpen, setNavOpen] = useState<boolean>(
		localStorage.getItem('navOpen') === 'true'
	)
	const [minNavWidth] = useState<string>('w-16')
	const location = useLocation()

	return (
		<div
			className={[
				'flex',
				navOpen && window.innerWidth < 640
					? 'fixed z-50 h-screen w-full bg-slate-900'
					: '',
			].join(' ')}
		>
			{navOpen && window.innerWidth < 640 && <div className={minNavWidth} />}
			<span
				className={[
					'h-screen-translate-x-full transition-transform sm:translate-x-0',
					navOpen
						? 'border-r border-r-slate-700 bg-slate-800'
						: 'z-50',
					navOpen && window.innerWidth < 640
						? 'fixed inset-0 z-50 w-screen'
						: 'max-w-[340px]',
				].join(' ')}
			>
				<div
					className={[
						'h-full overflow-y-auto py-4 px-1',
						navOpen ? '' : minNavWidth,
						navOpen && window.innerWidth < 640 ? 'w-screen' : '',
					].join(' ')}
				>
					<div
						className={[
							'flex cursor-pointer items-center font-permanent-marker text-slate-300',
							navOpen ? 'pl-2' : 'justify-center',
						].join(' ')}
						onClick={() =>
							setNavOpen((prevOpen) => {
								localStorage.setItem('navOpen', (!prevOpen).toString())
								return !prevOpen
							})
						}
					>
						<div className="flex h-10 items-center">
							<FontAwesomeIcon
								icon={faBars}
								className="h-7 w-7"
							/>
							{navOpen && (
								<div
									className={[
										' select-none items-center pl-2 text-3xl',
										navOpen ? 'ml-2' : '',
									].join(' ')}
								>
									Izvelne
								</div>
							)}
						</div>
					</div>
					<ul className="rounded-md pt-4">
						{buttonsState.map(({ href, icon, textValue }, i) => (
							<NavLeftBtn
								textValue={navOpen ? textValue : ''}
								icon={icon}
								href={href}
								isActive={location.pathname === href}
								isAchievement={false}
								id=""
								navOpen={navOpen}
								setNavOpen={setNavOpen}
								key={`nav-left-btn-${i}`}
							/>
						))}
					</ul>
				</div>
			</span>
		</div>
	)
}

export default NavbarLeftSide
