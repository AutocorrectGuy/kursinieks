import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faUser, faVenusMars } from '@fortawesome/free-solid-svg-icons'
import { FaEyebrow, FaLips, FaNose } from './SpecialIcons'
import { useState, useRef } from 'react';
import { facesSliderOptType } from './FaceSlider'
import Slider from 'react-slick';

type SliderOptButtonType = {
	name: facesSliderOptType
	icon: JSX.Element
	callback: (name:facesSliderOptType) => void
}
type Props = {
	selectedAssetState: [
		facesSliderOptType,
		React.Dispatch<React.SetStateAction<facesSliderOptType>>
	]
	savedAssetState: [
		{ [key in facesSliderOptType]: number },
		React.Dispatch<React.SetStateAction<{ [key in facesSliderOptType]: number }>>
	],
	sliderRef: React.RefObject<Slider>
}

const FaceSliderOpts = ({
	selectedAssetState,
	savedAssetState,
	sliderRef
}: Props) => {
	const [selectedAsset, setSelectedAsset] = selectedAssetState
	const [savedAssets, setSavedAssets] = savedAssetState
	const [buttons] = useState<SliderOptButtonType[]>([
		{
			name: 'gender',
			icon: (
				<FontAwesomeIcon
					icon={faVenusMars}
					className="h-8 w-8"
				/>
			),
			callback: (name) => setSelectedAsset(name),
		},
		{
			name: 'body',
			icon: (
				<FontAwesomeIcon
					icon={faUser}
					className="h-8 w-8"
				/>
			),
			callback: (name) => setSelectedAsset(name),
		},
		{
			name: 'eyes',
			icon: (
				<FontAwesomeIcon
					icon={faEye}
					className="h-8 w-8"
				/>
			),
			callback: (name) => setSelectedAsset(name),
		},
		{
			name: 'eyebrows',
			icon: <FaEyebrow />,
			callback: (name) => setSelectedAsset(name),
		},
		{
			name: 'mouth',
			icon: <FaLips />,
			callback: (name) => setSelectedAsset(name),
		},
	])

	return (
		<div className="grid grid-cols-6 gap-1 fill-jak-gray-100 p-2 text-jak-gray-100">
			{buttons.map(({ icon, name, callback }) => (
				<div
					key={`face-slier-opt-btn-${name}`}
					className={[
						'cursor-pointer rounded-xl border-b-[6px]',
						name === selectedAsset
							? 'border-b-transparent bg-transparent text-jak-gray-900'
							: 'border-b-jak-gray-900 bg-jak-gray-900',
					].join(' ')}
					
					onClick={() => {
						const slider = sliderRef.current
						setSelectedAsset(name)
						slider?.slickGoTo(savedAssets[name],false)
					}}
				>
					<div
						className={[
							'flex h-full items-center justify-center rounded-lg py-1',
							name === selectedAsset
								? 'translate-y-[4px] bg-jak-green-500'
								: 'bg-jak-gray-700 hover:bg-jak-gray-500',
						].join(' ')}
					>
						{icon}
					</div>
				</div>
			))}
		</div>
	)
}

export default FaceSliderOpts