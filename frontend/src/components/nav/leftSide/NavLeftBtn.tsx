import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import {
	IconDefinition,
	faHome,
} from '@fortawesome/free-solid-svg-icons'

export type NavLeftBtnType = {
	textValue: string
	icon: IconDefinition
  href: string
	isActive?: boolean
}

const NavLeftBtn = ({
	textValue,
	icon,
  href,
	isActive,
}: NavLeftBtnType) => {
	return (
		<li>
			<Link
				to={href}
				className={`${isActive ? 'bg-slate-700 select-none cursor-default' : 'bg-transparent'
        } flex items-center rounded-lg px-2 py-2 text-base font-normal text-slate-200 hover:bg-slate-700`}
			>
				<FontAwesomeIcon
					icon={icon}
					className="h-6 w-6 flex-shrink-0 text-slate-400 transition  duration-75 group-hover:text-white"
				/>
				<span className="ml-3">{textValue}</span>
			</Link>
		</li>
	)
}

export default NavLeftBtn
