import NextBtn from './NextBtn'

import FaceSlider from './ProfileSlider/FaceSlider'
import { useState } from 'react'

type Props = {}

const ProfileCard = (props: Props) => {
	const [nameValue, setNameValue] = useState<string>('Vārds')

	return (
		<div className="w-full max-w-[340px] rounded-lg border border-cyan-900 p-4 shadow-lg shadow-sky-800">
			<FaceSlider />
			<div className="flex items-center pt-4 pb-10">
				<input
					className="placeholder:font-medium mx-auto w-full max-w-[240px] rounded-lg bg-slate-700 py-2 px-2 text-center text-2xl font-semibold tracking-tight text-slate-100 outline-none focus:outline-none"
					value={nameValue}
					onChange={(e) => setNameValue(e.currentTarget.value)}
					placeholder={'Tavs vārds'}
				/>
			</div>
			<div className="flex w-full justify-center mb-4">
				<NextBtn />
			</div>
		</div>
	)
}

export default ProfileCard
