import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faUser, faVenusMars } from '@fortawesome/free-solid-svg-icons'
import { FaEyebrow, FaLips, FaNose } from './SpecialIcons'

const FaceSliderOpts = () => {
	return (
		<div className="grid grid-cols-6 gap-1 p-2">
			<div className="flex items-center justify-center rounded-xl  bg-slate-700 text-slate-800 shadow-sm hover:bg-white cursor-pointer">
				<FontAwesomeIcon
					icon={faVenusMars}
					className="h-8 w-8"
				/>
			</div>
			<div className="flex items-center justify-center rounded-xl bg-cyan-300 text-slate-800 shadow-sm hover:bg-white cursor-pointer">
				<FontAwesomeIcon
					icon={faUser}
					className="h-8 w-8"
				/>
			</div>
			<div className="flex items-center justify-center rounded-xl bg-slate-700 text-slate-800 shadow-sm hover:bg-white cursor-pointer">
				<FontAwesomeIcon
					icon={faEye}
					className="h-8 w-8"
				/>
			</div>
			<div className="flex items-center justify-center rounded-xl bg-slate-700 text-slate-800 shadow-sm hover:bg-white cursor-pointer">
				<FaEyebrow />
			</div>
			<div className="flex items-center justify-center rounded-xl bg-slate-700 text-slate-800 shadow-sm hover:bg-white cursor-pointer">
				<FaNose />
			</div>
			<div className="flex items-center justify-center rounded-xl bg-slate-700 text-slate-800 shadow-sm hover:bg-white cursor-pointer">
				<FaLips />
			</div>
		</div>
	)
}

export default FaceSliderOpts
