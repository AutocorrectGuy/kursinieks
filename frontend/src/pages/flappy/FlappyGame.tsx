import { useEffect, useState, useRef } from 'react'
import { Helmet } from 'react-helmet'
import FlappyGameClass from './FlappyGameClass'
import { namedHTMLImageElement } from './Types'
import HeaderHelmet from '../../layouts/HeaderHelmet'

const FlappyGame = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const [images, setImages] = useState<namedHTMLImageElement[]>([])
	const [game] = useState(new FlappyGameClass())

	useEffect(() => {
		// set canvas
		const canvas = canvasRef.current as HTMLCanvasElement
		canvas.setAttribute('width', `${game.canvas.w}px`)
		canvas.setAttribute('height', `${game.canvas.h}px`)
		canvas.addEventListener('click', game.handleClick)
		game.ctx = canvas.getContext('2d')

		// Load all images
		const promises: Promise<namedHTMLImageElement>[] = game.IMPORT_IMG_INFO_MAP.map(
			({ FILE_NAME, DESIRED_HEIGHT }, importIndex) => {
				return new Promise((resolve) => {
					const image = new Image()
					import(`../../${game.ASSETS_SRC_PATHS}${FILE_NAME}`).then((value) => {
						image.onload = () => {
							const nameHTMLImageElement: namedHTMLImageElement = {
								image,
								name: game.IMPORT_IMG_INFO_MAP[importIndex].NAME,
								assetCount: game.IMPORT_IMG_INFO_MAP[importIndex].ASSET_COUNT,
								scale: DESIRED_HEIGHT / image.height,
							}
							resolve(nameHTMLImageElement)
						}
						image.src = value.default
					})
				})
			}
		)

		Promise.all(promises).then((loadedImages) =>
			setImages(
				loadedImages.map((obj) => {
					const SRC = game.IMPORT_IMG_INFO_MAP.find(({ NAME }) => NAME === obj.name)
					if (!SRC) return obj

					obj.name = SRC.NAME
					return obj
				})
			)
		)
	}, [])

	function init() {
		const birdAsset = images.find(({ name }) => name === 'bird') as namedHTMLImageElement

		game.bird = {
			img: birdAsset.image,
			sprite: {
				w: birdAsset.image.width / birdAsset.assetCount,
				h: birdAsset.image.height,
				scale: birdAsset.scale,
			},
			frame: {
				curr: 0,
				max: 4,
			},
		}

		const pipeAsset = images.find(({ name }) => name === 'pipe') as namedHTMLImageElement

		game.pipe = {
			img: pipeAsset.image,
			sprite: {
				w: pipeAsset.image.width / pipeAsset.assetCount,
				h: pipeAsset.image.height,
				scale: pipeAsset.scale,
			},
			frame: {
				curr: 0,
				max: 1,
			},
		}

		const backgroundAsset = images.find(
			({ name }) => name === 'background'
		) as namedHTMLImageElement

		game.backgroundSprite = {
			img: backgroundAsset.image,
			sprite: {
				w: backgroundAsset.image.width,
				h: backgroundAsset.image.height,
				scale: backgroundAsset.scale,
			},
			frame: {
				curr: 0,
				max: 3,
			},
		}
	}

	useEffect(() => {
		// Draw images on the canvas
		if (!canvasRef.current) return
		if (!game.ctx) return
		if (!images.length) return

		init()
		game.init()
		game.gameLoop()
	}, [images])

	return (
		<div>
			<HeaderHelmet pageTitle="Putns | Barkava"/>
			<canvas
				ref={canvasRef}
				id="canvas"
				className="bg-black"
				style={{
					position: 'absolute',
				}}
			/>
		</div>
	)
}

export default FlappyGame
