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
				'flex items-center rounded-lg py-3 text-base font-normal text-jak-green-100 my-1',
				isActive
					? 'cursor-default select-none bg-jak-green-700'
					: 'bg-transparent hover:bg-jak-green-800 group-hover:text-white',
				navOpen ? 'px-3' : 'justify-center',
			].join(' ')}
			onClick={() => {
				localStorage.setItem('navOpen', 'false')
				setNavOpen((navOpen) => (window.innerWidth < 640 ? false : navOpen))
			}}
		>
			<FontAwesomeIcon
				icon={icon}
				className="h-7 w-7 text-jak-green-400"
			/>
			<span className={textValue.length ? 'ml-3' : ''}>{textValue}</span>
		</Link>
	</li>
)

export default NavLeftBtn
