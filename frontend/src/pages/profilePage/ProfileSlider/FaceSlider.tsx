import Slider, { Settings, Settings as SliderSettings } from 'react-slick'
import { useState, useEffect, useRef, Fragment } from 'react'
import Skeleton from 'react-loading-skeleton'
import FaceSliderOpts from './FaceSliderOpts'
import FaceSliderArrow from './FaceSliderArrow'
import { imgCounterType } from './FaceSlider.helpers'
import {
	sortLoadedImages,
	getPromisedListOfImportImages,
	initialAssetCounters,
	selectedAssetType,
	assetType,
	SelectedAssetsImgs,
} from './FaceSlider.helpers'

const FaceSlider = () => {
	const [images, setImages] = useState<{
		male: { [key in assetType]: string[] }
		female: { [key in assetType]: string[] }
		genderImg: { male: string; female: string }
	}>({
		male: { mouth: [], eyes: [], eyebrows: [], body: [] },
		female: { mouth: [], eyes: [], eyebrows: [], body: [] },
		genderImg: { male: '', female: '' },
	})

	const [savedAssets, setSavedAssets] = useState<imgCounterType>(initialAssetCounters)
	const [selectedAsset, setSelectedAsset] = useState<selectedAssetType>({
		gender: 'male',
		assetType: 'body',
	})
	const [imagesLoaded, setImagesLoaded] = useState<boolean>(false)
	const [afterCategoryChange, setAfterCategoryChange] = useState(false)
	const sliderRef = useRef<Slider>(null)

	useEffect(() => {
		Promise.all(getPromisedListOfImportImages()).then((srcArr) => {
			setImages(sortLoadedImages(srcArr))
			setImagesLoaded(true)
		})
	}, [])

	return (
		<div className="my-10">
			{!imagesLoaded ? (
				<Skeleton
					baseColor="#2e2f33"
					highlightColor="#35373b"
					height={320}
				/>
			) : (
				<div
					className="relative select-none rounded-lg"
					style={{
						backgroundImage: 'radial-gradient(#3e45477F 20%, #35373B99 80%)',
					}}
				>
					<FaceSliderOpts
						selectedAssetState={[selectedAsset, setSelectedAsset]}
						savedAssetState={[savedAssets, setSavedAssets]}
						sliderRef={sliderRef}
						setAfterCategoryChange={setAfterCategoryChange}
					/>
					{
						<img
							className="z-100 absolute inset-x-0 mx-auto"
							key={`selected-asset-gender`}
							src={images.genderImg[selectedAsset.gender]}
							alt=""
						/>
					}
					{Object.keys(savedAssets).map(
						(assetType, selectedAssetIndex) =>
							assetType !== 'gender' && (
								<SelectedAssetsImgs
									assetType={assetType}
									gender={selectedAsset.gender}
									key={`selected-asset-img-${selectedAsset.gender}${selectedAssetIndex}`}
									images={images}
									savedAssets={savedAssets}
								/>
							)
					)}
					<Slider
						fade={true}
						ref={sliderRef}
						infinite={true}
						speed={0}
						slidesToShow={1}
						slidesToScroll={1}
						prevArrow={
							<FaceSliderArrow
								selectedAssetType={selectedAsset.assetType}
								setSavedAssets={setSavedAssets}
								direction={'left'}
								gender={selectedAsset.gender}
							/>
						}
						nextArrow={
							<FaceSliderArrow
								selectedAssetType={selectedAsset.assetType}
								setSavedAssets={setSavedAssets}
								direction={'right'}
								gender={selectedAsset.gender}
							/>
						}
						className={'mx-auto h-64 w-64 select-none'}
					>
						{images[selectedAsset.gender][selectedAsset.assetType].map((img, i) => {
							return i === savedAssets[selectedAsset.assetType] ? (
								<img
									className="select-none border-none"
									src={img}
									alt=""
									key={`slider-face${i}`}
								/>
							) : (
								<Fragment key={`slider-face${i}`}></Fragment>
							)
						})}
					</Slider>
				</div>
			)}
		</div>
	)
}

export default FaceSlider
