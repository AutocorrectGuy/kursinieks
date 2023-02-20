export type assetType = 'mouth' | 'eyes' | 'eyebrows' | 'body'
export type genderTemplate<T> = { male: T; female: T }
export type imgCounterType = { [key in assetType]: number }
export type imgCounterTypeWithGender = { [key in assetType | 'gender']: number }
export type importAssetType = {
	type: assetType
	count: genderTemplate<number>
	path: (genderIndex: number) => string
	fileName: (fileIndex: number) => void
}
export type selectedAssetType = {
	gender: 'male' | 'female'
	assetType: assetType
}

export const ASSETS: importAssetType[] = [
	{
		type: 'body',
		count: { male: 5, female: 6 },
		path: (genderIndex) => `body-${genderIndex}/`,
		fileName: (fileIndex: number) => `f (${fileIndex}).png`,
	},
	{
		type: 'eyes',
		count: { male: 5, female: 3 },
		path: (genderIndex) => `eyes-${genderIndex}/`,
		fileName: (fileIndex: number) => `eye (${fileIndex}).png`,
	},
	{
		type: 'eyebrows',
		count: { male: 3, female: 5 },
		path: (genderIndex) => `eyebrows-${genderIndex}/`,
		fileName: (fileIndex: number) => `eyebrow (${fileIndex}).png`,
	},
	{
		type: 'mouth',
		count: { male: 5, female: 6 },
		path: (genderIndex) => `mouths-${genderIndex}/`,
		fileName: (fileIndex: number) => `mouth (${fileIndex}).png`,
	},
]

export const initialAssetCounters: imgCounterType = {
	mouth: 0,
	eyes: 0,
	eyebrows: 0,
	body: 0,
}

export const assetsCounter = (ASSETS: importAssetType[]) =>
	[...Array(2)].reduce(
		(acc, _curr, i) => {
			const gender = !i ? 'male' : 'female'
			return {
				...acc,
				[gender]: ASSETS.reduce(
					(acc2, { type, count }) => ({ ...acc2, [type]: count[gender] }),
					{}
				),
			}
		},
		{ male: {}, female: {} }
	)

export const SelectedAssetsImgs = ({
	assetType,
	gender,
	images,
	savedAssets,
}: {
	assetType: string
	gender: 'male' | 'female'
	images: genderTemplate<{ [key in assetType]: string[] }>
	savedAssets: imgCounterType
}) => (
	<img
		className="z-100 absolute inset-x-0 mx-auto select-none"
		key={`selected-asset-${assetType}`}
		src={images[gender][assetType as assetType][savedAssets[assetType as assetType]]}
		alt=""
	/>
)

export const ASSETS_COUNTER: genderTemplate<imgCounterType> = assetsCounter(ASSETS)
	
export const sortLoadedImages = (srcArr: any[]) => {
	const maleAssetsCount = ASSETS.reduce((acc, curr) => acc + curr.count.male, 0)
	const getImgType = (i: number, { body, eyes, eyebrows }: imgCounterType): assetType => {
		if (i < body) return 'body'
		else if (i >= body && i < body + eyes) return 'eyes'
		else if (i >= eyes && i < body + eyes + eyebrows) return 'eyebrows'
		else return 'mouth'
	}

	const sortedImages = srcArr.reduce((acc, curr, i) => {
		if (i > srcArr.length - 3) return acc

		const gender = i < maleAssetsCount ? 'male' : 'female'
		if (!(gender in acc)) acc[gender] = []

		const currAssetType = getImgType(
			gender === 'male' ? i : i - maleAssetsCount,
			ASSETS_COUNTER[gender]
		)
		if (!(currAssetType in acc[gender])) acc[gender][currAssetType] = []

		return {
			...acc,
			[gender]: {
				...acc[gender],
				[currAssetType]: [...acc[gender][currAssetType], curr.default],
			},
		}
	}, {})

	// add two gender images at the end
	sortedImages.genderImg = {
		male: srcArr[srcArr.length - 2].default,
		female: srcArr[srcArr.length - 1].default,
	}
	return sortedImages
}

export const getPromisedListOfImportImages = () => [
	...['male', 'female', 'genders']
		.map((gender, genderIndex) =>
			genderIndex < 2
				? ASSETS.map(({ count, fileName, path }) =>
						[...Array(count[gender as 'male' | 'female'])].map(
							async (_x, assetIndex) =>
								await import(
									`../../../assets/img/${path(genderIndex)}${fileName(assetIndex + 1)}`
								)
						)
				  ).flat()
				: [...Array(2)].map(
						async (_x, genderAssetIndex) =>
							await import(`../../../assets/img/gender/gender (${genderAssetIndex}).png`)
				  )
		)
		.flat(),
]
