import CanvasGameClass from './CanvasGameClass'
import { ImageInfoType, spriteType } from './Types'
import { PharallaxBG } from './PharallaxBG'
import { Bird } from './Bird'

export default class FlappyGameClass extends CanvasGameClass {
	// Assets
	ASSETS_SRC_PATHS: string = 'assets/img/flappy/'
	IMPORT_IMG_INFO_MAP: ImageInfoType[] = [
		{
			FILE_NAME: 'bird_2.png',
			NAME: 'bird',
			DESIRED_HEIGHT: 128,
			ASSET_COUNT: 1,
		},
		{
			FILE_NAME: 'pipe.png',
			NAME: 'pipe',
			DESIRED_HEIGHT: this.canvas.h / 2,
			ASSET_COUNT: 1,
		},
		{
			FILE_NAME: 'back_city.png',
			// FILE_NAME: 'test_bg_1.jpg',
			NAME: 'background',
			DESIRED_HEIGHT: this.canvas.h,
			ASSET_COUNT: 3,
		},
	]

	// Gameplay
	bird: spriteType | null = null
	pipe: spriteType | null = null
	pipePostX: number = 0

	backgroundSprite: spriteType | null = null

	bg1: PharallaxBG | null = null
	bg2: PharallaxBG | null = null
	bg3: PharallaxBG | null = null
	birdy: Bird | null = null

	constructor() {
		super()
	}

	handleClick = (e: MouseEvent) => {
		if (!this.birdy) return

		this.birdy.handleClick()
	}

	init = () => {
		if(!this.ctx) return
		
		this.ctx.imageSmoothingEnabled = false;

		if (!this.backgroundSprite) throw new Error('no background asset imported')
		this.bg1 = new PharallaxBG({
			bgSprite: this.backgroundSprite,
			spriteIndex: 0,
		})
		this.bg2 = new PharallaxBG({
			bgSprite: this.backgroundSprite,
			spriteIndex: 1,
		})
		this.bg3 = new PharallaxBG({
			bgSprite: this.backgroundSprite,
			spriteIndex: 2,
		})
		if (!this.bird) throw new Error('no bird asset imported')
		this.birdy = new Bird({
			canvasW: this.canvas.w,
			canvasH: this.canvas.h,
			birdSprite: this.bird,
		})
	}

	update = () => {
		if (!this.bg1) return
		if (!this.bg2) return
		if (!this.bg3) return
		if (!this.birdy) return

		this.bg1.update()
		this.bg2.update()
		this.bg3.update()
		this.birdy.update()
	}

	render = () => {
		if (!this.ctx) return
		if (!this.bg1) return
		if (!this.bg2) return
		if (!this.bg3) return
		if (!this.birdy) return

		this.bg1.render(this.ctx)
		this.bg2.render(this.ctx)
		this.bg3.render(this.ctx)
		this.birdy.render(this.ctx)
	}

	gameLoop = () => {
		this.updateDT(() => {
			if (!this.ctx) return

			this.ctx.clearRect(0, 0, this.canvas.w, this.canvas.h)
			this.update()
			this.render()
		})
		requestAnimationFrame(this.gameLoop)
	}
}
