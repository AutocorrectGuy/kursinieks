import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { CustomArrowProps } from 'react-slick'
import { imgCounterType, assetType, ASSETS_COUNTER } from './FaceSlider.helpers'

interface extendedCustomArrowProps extends CustomArrowProps {
	direction: 'left' | 'right'
	setSavedAssets: React.Dispatch<React.SetStateAction<imgCounterType>>
	selectedAssetType: assetType
	gender: 'male' | 'female'
}

const FaceSliderArrow = ({
	currentSlide,
	slideCount,
	direction,
	onClick,
	setSavedAssets,
	selectedAssetType,
	gender,
	...props
}: extendedCustomArrowProps) => (
	<div
		className="block"
		{...props}
		onClick={(e) => {
			setSavedAssets((prev) => ({
				...prev,
				[selectedAssetType]:
					direction === 'left'
						? prev[selectedAssetType] === 0
							? ASSETS_COUNTER[gender][selectedAssetType] - 1
							: prev[selectedAssetType] - 1
						: prev[selectedAssetType] === ASSETS_COUNTER[gender][selectedAssetType] - 1
						? 0
						: prev[selectedAssetType] + 1,
			}))
			onClick !== undefined && onClick(e)
		}}
	>
		<div
			className={[
				'absolute top-1/2 z-10 flex h-[250px] w-[24px] -translate-y-1/2 cursor-pointer items-center justify-center text-jak-green-100 hover:text-white',
				direction === 'left'
					? 'left-0 -translate-x-[130%]'
					: 'right-0 translate-x-[130%]',
			].join(' ')}
		>
			<FontAwesomeIcon
				icon={direction === 'left' ? faChevronLeft : faChevronRight}
				className={`h-[80px] scale-x-75`}
			/>
		</div>
	</div>
)
export default FaceSliderArrow
