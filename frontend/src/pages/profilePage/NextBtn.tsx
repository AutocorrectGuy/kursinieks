import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

type Props = {
	textValue: string
}
const NextBtn = ({ textValue }: Props) => {
	return (
		<button className="hover:bg-gradient-to-br rounded-lg border-b-[6px] border-b-jak-green-800 bg-jak-green-800 font-permanent-marker text-2xl uppercase text-slate-200">
			<div className="flex items-center justify-center rounded-lg bg-jak-green-600 py-3 pl-6 pr-5 hover:bg-jak-green-500">
				{textValue}
				<FontAwesomeIcon
					icon={faChevronRight}
					className="ml-1 h-5 w-5 translate-y-[2px]"
				/>
			</div>
		</button>
	)
}

export default NextBtn
