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
				'fixed flex',
				navOpen && window.innerWidth < 640
					? 'z-50 h-screen w-full bg-slate-900'
					: 'w-full max-w-[300px]',
			].join(' ')}
		>
			{navOpen && window.innerWidth < 640 && <div className={minNavWidth} />}
			<span
				className={[
					'h-screen-translate-x-full transition-transform sm:translate-x-0',
					navOpen ? 'border-r border-r-slate-700 bg-slate-800' : 'z-50',
					navOpen && window.innerWidth < 640
						? 'fixed inset-0 z-50 w-screen'
						: 'w-full max-w-[340px]',
				].join(' ')}
			>
				<div
					className={[
						'fixed py-4 px-1',
						navOpen ? 'left-0 h-full' : 'left-4',
						navOpen && window.innerWidth < 640 ? 'w-screen' : '',
					].join(' ')}
				>
					<div
						className={[
							'flex cursor-pointer items-start text-slate-300',
							navOpen ? 'pl-4' : 'justify-center',
						].join(' ')}
						onClick={() =>
							setNavOpen((prevOpen) => {
								localStorage.setItem('navOpen', (!prevOpen).toString())
								return !prevOpen
							})
						}
					>
						<div className="flex h-14 items-center">
							<FontAwesomeIcon
								icon={faBars}
								className="h-7 w-7"
							/>
							{navOpen && (
								<div
									className={[
										'font-permanent-marker select-none items-center pl-2 text-3xl',
										navOpen ? 'ml-2' : '',
									].join(' ')}
								>
									Izvelne
								</div>
							)}
						</div>
					</div>
					<ul
						className={[
							navOpen && 'rounded-lg shadow-md shadow-slate-900 p-2 border border-slate-700 bg-slate-800'
						].join(' ')}
					>
						{buttonsState.map(
							({ href, icon, textValue }, i) =>
								navOpen && (
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
								)
						)}
					</ul>
				</div>
			</span>
		</div>
	)
}

export default NavbarLeftSide
