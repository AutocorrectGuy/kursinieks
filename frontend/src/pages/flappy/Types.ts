export type ImageInfoType = {
	FILE_NAME: string
	NAME: string,
	DESIRED_HEIGHT: number
	ASSET_COUNT: number
}

export type namedHTMLImageElement = {
	image: HTMLImageElement
	name: string
	assetCount: number
	scale: number
}

export type spriteType = {
	img: HTMLImageElement
	sprite: {
		w: number
		h: number
		scale: number
	}
	frame: {
		curr: number
		max: number
	}
}
