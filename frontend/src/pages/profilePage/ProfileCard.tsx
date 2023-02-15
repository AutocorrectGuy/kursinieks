import NextBtn from './NextBtn'

import FaceSlider from './ProfileSlider/FaceSlider'
import { useState } from 'react'
import SchoolSelectDropdown from './SchoolSelectDropdown'

const ProfileCard = () => {
	const [name, setName] = useState<string>('')

	return (
		<div className="m-2 w-full max-w-[400px] rounded-lg border border-jak-gray-800 p-4 shadow-md shadow-neutral-900">
			<div className="select-none rounded-lg bg-jak-gray-700 py-2 text-center text-xl">
				<span className="text-white">Izveido savu personāžu</span>
			</div>
			<FaceSlider />
			<div className="flex h-10 items-center text-xl">
				<div className="w-24 font-semibold text-jak-gray-100">Vārds:</div>
				<input
					className="mx-auto h-full w-full rounded-lg bg-jak-gray-700 px-3 tracking-tight text-jak-gray-100 outline-none placeholder:font-medium placeholder:text-jak-gray-200 focus:outline-none"
					value={name}
					onChange={(e) => setName(e.currentTarget.value)}
					placeholder={'...'}
				/>
			</div>
			<div className="flex items-center py-4  text-xl">
				<div className="w-24 font-semibold text-jak-gray-100">Skola:</div>
				<SchoolSelectDropdown />
			</div>
			<div className="my-4 flex w-full justify-center">
				<NextBtn textValue="Izveidot" />
			</div>
		</div>
	)
}

export default ProfileCard
