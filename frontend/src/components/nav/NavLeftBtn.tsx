import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { NavOptionInterface } from '../../PagesOptions'

interface navBtnInterface extends NavOptionInterface {
	navOpen: boolean
	setNavOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const NavLeftBtn = ({
	textValue,
	icon,
	href,
	isActive,
	navOpen,
	setNavOpen,
}: navBtnInterface) => (
	<li>
		<Link
			to={href}
			className={[
				'flex items-center rounded-lg py-3 text-base font-normal text-slate-200',
				isActive
					? 'cursor-default select-none bg-slate-700'
					: 'bg-transparent hover:bg-slate-800 group-hover:text-white',
				navOpen ? 'px-3' : 'justify-center',
			].join(' ')}
			onClick={() => {
				localStorage.setItem('navOpen', 'false')
				setNavOpen((navOpen) => (window.innerWidth < 640 ? false : navOpen))
			}}
		>
			<FontAwesomeIcon
				icon={icon}
				className="h-7 w-7 text-slate-400"
			/>
			<span className={textValue.length ? 'ml-3' : ''}>{textValue}</span>
		</Link>
	</li>
)

export default NavLeftBtn
