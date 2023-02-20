import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faUser, faVenusMars } from '@fortawesome/free-solid-svg-icons'
import { FaEyebrow, FaLips, FaNose } from './SpecialIcons'
import { useState, useRef } from 'react'
import Slider from 'react-slick'
import { imgCounterType } from './FaceSlider.helpers'
import {
	assetType,
	selectedAssetType,
	initialAssetCounters,
	imgCounterTypeWithGender,
} from './FaceSlider.helpers'

type SliderOptButtonType = {
	name: assetType | 'gender'
	icon: JSX.Element
}
type Props = {
	selectedAssetState: [
		selectedAssetType,
		React.Dispatch<React.SetStateAction<selectedAssetType>>
	]
	savedAssetState: [imgCounterType, React.Dispatch<React.SetStateAction<imgCounterType>>]
	sliderRef: React.RefObject<Slider>
	setAfterCategoryChange: React.Dispatch<React.SetStateAction<boolean>>
}

const FaceSliderOpts = ({
	selectedAssetState,
	savedAssetState,
	sliderRef,
	setAfterCategoryChange,
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
		},
		{
			name: 'body',
			icon: (
				<FontAwesomeIcon
					icon={faUser}
					className="h-8 w-8"
				/>
			),
		},
		{
			name: 'eyes',
			icon: (
				<FontAwesomeIcon
					icon={faEye}
					className="h-8 w-8"
				/>
			),
		},
		{
			name: 'eyebrows',
			icon: <FaEyebrow />,
		},
		{
			name: 'mouth',
			icon: <FaLips />,
		},
	])

	return (
		<div className="flex justify-center gap-1 fill-jak-gray-100 p-2 text-jak-gray-100">
			{buttons.map(({ icon, name }) => (
				<div
					key={`face-slier-opt-btn-${name}`}
					className={[
						'h-14 w-14 cursor-pointer rounded-xl border-b-[6px]',
						name === selectedAsset.assetType
							? 'border-b-transparent bg-transparent text-jak-gray-900'
							: 'border-b-jak-gray-900 bg-jak-gray-900',
					].join(' ')}
					onClick={() => {
						sliderRef.current?.forceUpdate(() => {
							setAfterCategoryChange(true)
							if (name === 'gender') {
								sliderRef.current?.slickGoTo(0, true)
								setSavedAssets(() => {
									return { body: 0, eyebrows: 0, eyes: 0, mouth: 0 }
								})
								setSelectedAsset((prev) => ({
									gender: prev.gender === 'male' ? 'female' : 'male',
									assetType: 'body',
								}))
							} else {
								setSelectedAsset({ gender: selectedAsset.gender, assetType: name })
								sliderRef.current?.slickGoTo(savedAssets[name], true)
							}
						})
					}}
				>
					<div
						className={[
							'flex h-full items-center justify-center rounded-lg py-1',
							name === selectedAsset.assetType
								? 'translate-y-[4px]'
								: 'bg-jak-gray-700 hover:bg-jak-gray-500',
							name === selectedAsset.assetType
								? selectedAsset.gender === 'male'
									? 'bg-jak-green-500'
									: 'bg-jak-purple-700'
								: '',
							name === 'gender' &&
								'translate-y-[4px] bg-jak-gray-700 hover:bg-jak-gray-500',
							name === 'gender' &&
								selectedAsset.gender === 'male' &&
								'text-jak-green-500',
							name === 'gender' &&
								selectedAsset.gender === 'female' &&
								'text-jak-purple-500',
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
