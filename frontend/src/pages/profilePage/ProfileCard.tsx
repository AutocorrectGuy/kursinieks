import NextBtn from './NextBtn'

import FaceSlider from './ProfileSlider/FaceSlider'
import { useState } from 'react'

const ProfileCard = () => {
	const [name, setName] = useState<string>('')
	const [profession, setProfession] = useState<string>('')

	return (
		<div className="w-full max-w-[340px] rounded-lg border border-cyan-900 p-4 shadow-lg shadow-sky-800">
			<div className="select-none rounded-lg bg-slate-700 py-2 text-center text-xl">
				<span className="text-slate-300">Izveido savu&nbsp;</span>
				<span className="text-white bg-slate-800 bg-opacity-50 pb-1 px-2 rounded-md">personāžu</span>
			</div>
			<FaceSlider />
			<div className="flex items-center text-xl">
				<div className="w-36 font-semibold text-slate-300">Vārds:</div>
				<input
					className="mx-auto w-full max-w-[240px] rounded-lg bg-slate-700 py-1 px-3 font-semibold tracking-tight text-slate-100 outline-none placeholder:font-medium placeholder:text-slate-500 focus:outline-none"
					value={name}
					onChange={(e) => setName(e.currentTarget.value)}
					placeholder={'...'}
				/>
			</div>
			<div className="flex items-center py-4  text-xl">
				<div className="w-36 font-semibold text-slate-300">Profesija:</div>
				<input
					className="mx-auto w-full max-w-[240px] rounded-lg bg-slate-700 py-1 px-3 font-semibold tracking-tight text-slate-100 outline-none placeholder:font-medium placeholder:text-slate-500 focus:outline-none"
					value={profession}
					onChange={(e) => setProfession(e.currentTarget.value)}
					placeholder={'Izvēlies profesiju'}
				/>
			</div>
			<div className="my-4 flex w-full justify-center">
				<NextBtn textValue="Izveidot" />
			</div>
		</div>
	)
}

export default ProfileCard
