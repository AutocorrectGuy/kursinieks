import Slider, { Settings, Settings as SliderSettings } from 'react-slick'
import { useState, useEffect, useRef, Fragment } from 'react'
import Skeleton from 'react-loading-skeleton'
import FaceSliderOpts from './FaceSliderOpts'
import FaceSliderArrow from './FaceSliderArrow'

export type facesSliderOptType = 'gender' | 'mouth' | 'eyes' | 'eyebrows' | 'body'

type imageType = { id: number; src: string }
type imagesType = {
	[key in facesSliderOptType]: imageType[]
}

type assetsImportType = {
	type: facesSliderOptType
	count: number
	path: string
	fileName: (fileIndex: number) => void
}
const getImgType = (
	i: number,
	{ gender, body, eyes, eyebrows }: { [key in facesSliderOptType]: number }
): facesSliderOptType => {
	if (i < gender) return 'gender'
	else if (i >= gender && i < gender + body) return 'body'
	else if (i >= body && i < gender + body + eyes) return 'eyes'
	else if (i >= eyes && i < gender + body + eyes + eyebrows) return 'eyebrows'
	else return 'mouth'
}

const SelectedAssetsImgs = ({
	assetType,
	images,
	savedAssets,
}: {
	assetType: string
	images: imagesType
	savedAssets: { [key in facesSliderOptType]: number }
}) => (
	<img
		className="z-100 absolute inset-x-0 mx-auto"
		key={`selected-asset-${assetType}`}
		src={
			images[assetType as facesSliderOptType][
				savedAssets[assetType as facesSliderOptType]
			].src
		}
		alt=""
	/>
)

const FaceSlider = () => {
	const [images, setImages] = useState<imagesType>({
		gender: [],
		mouth: [],
		eyes: [],
		eyebrows: [],
		body: [],
	})
	// store selected asset id
	const [savedAssets, setSavedAssets] = useState<{ [key in facesSliderOptType]: number }>(
		{
			gender: 1,
			mouth: 0,
			eyes: 0,
			eyebrows: 0,
			body: 0,
		}
	)
	const [imagesLoaded, setImagesLoaded] = useState<boolean>(false)
	const [selectedAsset, setSelectedAsset] = useState<facesSliderOptType>('gender')
	const sliderRef = useRef<Slider>(null)

	// importing assets
	
	// const assetCounters = {
	// 	gender: 2,
	// 	mouth: 5,
	// 	eyes: 5,
	// 	eyebrows: 3,
	// 	body: 7,
	// }

	// [
	// 	...[...Array(assetCounters.gender)].map(
	// 		async (_x, i) => await import(`${ASSETS_PATH}gender/gender (${i + 1}).png`)
	// 	),
	// 	...[...Array(assetCounters.body)].map(
	// 		async (_x, i) => await import(`${ASSETS_PATH}body-0/f (${i + 1}).png`)
	// 	),
	// 	...[...Array(assetCounters.eyes)].map(
	// 		async (_x, i) => await import(`${ASSETS_PATH}eyes-0/eye (${i + 1}).png`)
	// 	),
	// 	...[...Array(assetCounters.eyebrows)].map(
	// 		async (_x, i) => await import(`${ASSETS_PATH}eyebrows-0/eyebrow (${i + 1}).png`)
	// 	),
	// 	...[...Array(assetCounters.mouth)].map(
	// 		async (_x, i) => await import(`${ASSETS_PATH}mouths-0/mouth (${i + 1}).png`)
	// 	),
	// ]

	const ASSETS: assetsImportType[] = [
		{
			type: 'gender',
			count: 2,
			path: 'gender/',
			fileName: (fileIndex: number) => `gender (${fileIndex}).png`,
		},
		{
			type: 'body',
			count: 5,
			path: 'body-0/',
			fileName: (fileIndex: number) => `f (${fileIndex}).png`,
		},
		{
			type: 'eyes',
			count: 5,
			path: 'eyes-0/',
			fileName: (fileIndex: number) => `eye (${fileIndex}).png`,
		},
		{
			type: 'eyebrows',
			count: 3,
			path: 'eyebrows-0/',
			fileName: (fileIndex: number) => `eyebrow (${fileIndex}).png`,
		},
		{
			type: 'mouth',
			count: 5,
			path: 'mouths-0/',
			fileName: (fileIndex: number) => `mouth (${fileIndex}).png`,
		},
	]

	useEffect(() => {
		Promise.all(
			ASSETS.map(({ count, fileName, path }) =>
				[...Array(count)].map(
					async (_x, j) => await import(`../../../assets/img/${path}${fileName(j + 1)}`)
				)
			).flat()
		).then((srcArr) => {
			const assetCounters = ASSETS.reduce(
				(acc, { type, count }) => ({ ...acc, [type]: count }),
				{} as { [key in facesSliderOptType]: number }
			)

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
					<FaceSliderOpts
						selectedAssetState={[selectedAsset, setSelectedAsset]}
						savedAssetState={[savedAssets, setSavedAssets]}
						sliderRef={sliderRef}
					/>
					{Object.keys(savedAssets).map((assetType, selectedAssetIndex) => {
						const assetsProps = {
							assetType: assetType,
							key: selectedAssetIndex,
							images: images,
							savedAssets: savedAssets,
						}
						return <SelectedAssetsImgs {...assetsProps} />
					})}
					<Slider
						fade={true}
						ref={sliderRef}
						infinite={true}
						speed={0}
						slidesToShow={1}
						slidesToScroll={1}
						prevArrow={<FaceSliderArrow direction={'left'} />}
						nextArrow={<FaceSliderArrow direction={'right'} />}
						className={'mx-auto h-64 w-64'}
						beforeChange={(_curr, next) =>
							setSavedAssets((prevAssets) => ({ ...prevAssets, [selectedAsset]: next }))
						}
					>
						{images[selectedAsset].map((img, i) =>
							i === savedAssets[selectedAsset] ? (
								<img
									className="select-none border-none"
									src={img.src}
									alt=""
									key={`slider-face${i}`}
								/>
							) : (
								<Fragment key={`slider-face${i}`}></Fragment>
							)
						)}
					</Slider>
				</div>
			)}
		</div>
	)
}

export default FaceSlider
