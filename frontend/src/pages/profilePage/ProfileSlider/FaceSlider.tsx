import Slider, { Settings as SliderSettings } from 'react-slick'
import { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import FaceSliderOpts from './FaceSliderOpts'
import FaceSliderArrow from './FaceSliderArrow'

export type facesSliderOptType =
	| 'gender'
	| 'body'
	| 'eyes'
	| 'eyebrows'
	| 'nose'
	| 'mouth'

type imageType = { id: number; src: string }
type imagesType = {
	[key in facesSliderOptType]: imageType[]
}
type assetCounterType = { [key in facesSliderOptType]: number }

const assetCounters = {
	gender: 2,
	body: 12,
	eyes: 4,
	eyebrows: 5,
	nose: 3,
	mouth: 6,
}

const getImgType = (
	i: number,
	{ gender, body, eyes, eyebrows, nose, mouth }: assetCounterType
): facesSliderOptType => {
	if (i < gender) return 'gender'
	else if (i >= gender && i < gender + body) return 'body'
	else if (i >= body && i < gender + body + eyes) return 'eyes'
	else if (i >= eyes && i < gender + body + eyes + eyebrows) return 'eyebrows'
	else if (i >= eyebrows && i < gender + body + eyes + eyebrows + nose) return 'nose'
	else return 'mouth'
}

const FaceSlider = () => {
	const [images, setImages] = useState<imagesType>({
		gender: [],
		body: [],
		eyes: [],
		eyebrows: [],
		nose: [],
		mouth: [],
	})
	// store selected asset id
	const [savedAssets, setSavedAssets] = useState<{ [key in facesSliderOptType]: number }>(
		{
			gender: 0,
			body: 0,
			eyes: 0,
			eyebrows: 0,
			nose: 0,
			mouth: 0,
		}
	)
	const [imagesLoaded, setImagesLoaded] = useState<boolean>(false)
	const [selectedAsset, setSelectedAsset] = useState<facesSliderOptType>('gender')

	useEffect(() => {
		Promise.all([
			...[...Array(assetCounters.gender)].map(
				async (_x, i) => await import(`../../../assets/img/gender-1/gender (${i}).png`)
			),
			...[...Array(assetCounters.body)].map(
				async (_x, i) => await import(`../../../assets/img/body-1/f (${i + 7}).png`)
			),
			...[...Array(assetCounters.eyes)].map(
				async (_x, i) => await import(`../../../assets/img/eyes-1/eye (${i + 1}).png`)
			),
			...[...Array(assetCounters.eyebrows)].map(
				async (_x, i) =>
					await import(`../../../assets/img/eyebrows-1/eyebrow (${i + 1}).png`)
			),
			...[...Array(assetCounters.nose)].map(
				async (_x, i) => await import(`../../../assets/img/noses-1/nose (${i + 1}).png`)
			),
			...[...Array(assetCounters.mouth)].map(
				async (_x, i) => await import(`../../../assets/img/mouths-1/mouth (${i + 1}).png`)
			),
		]).then((srcArr) => {
			setImages(
				srcArr.reduce((acc, curr, i) => {
					let imgType = getImgType(i, assetCounters)
					let currObj: imageType = { id: i, src: curr.default }
					return imgType in acc
						? { ...acc, [imgType]: [...acc[imgType], currObj] }
						: { ...acc, [imgType]: [currObj] }
				}, {})
			)
			setImagesLoaded(true)
		})
	}, [])

	const settings: SliderSettings = {
		infinite: true,
		speed: 150,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: <FaceSliderArrow direction={'left'} />,
		nextArrow: <FaceSliderArrow direction={'right'} />,
		className: 'mx-auto h-64 w-64',
		beforeChange: (curr, next) => {
			setSavedAssets((prevAssets) => {
				// console.log({ ...prevAssets, [selectedAsset]: next })
				return { ...prevAssets, [selectedAsset]: next }
			})
		},
	}

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
					className="relative rounded-lg"
					style={{
						backgroundImage: 'radial-gradient(#3e45477F 20%, #35373B99 80%)',
					}}
				>
					<FaceSliderOpts selectedAssetState={[selectedAsset, setSelectedAsset]} />
					{Object.keys(savedAssets).map(
						(assetType) => 
							(selectedAsset !== assetType) && (assetType !== 'gender') && (
								<img
									className="absolute inset-x-0 mx-auto"
									key={`selected-asset-${assetType}`}
									src={
										images[assetType as facesSliderOptType][
											savedAssets[assetType as facesSliderOptType]
										].src
									}
									alt=""
								/>
							)
					)}
					<Slider {...settings}>
						{images[selectedAsset].map((img, i) => (
							<img
								className="select-none border-none"
								src={img.src}
								alt=""
								key={`slider-face${i}`}
							/>
						))}
					</Slider>
				</div>
			)}
		</div>
	)
}

export default FaceSlider
