import { spriteType } from './Types'

export class PharallaxBG {
	private bg: spriteType
	private speed: number
	private x: number[]
	private w: number
	private h: number
	private spriteX: number
	private spriteW: number
	private count: number
	private maxScrollW: number
	private spriteIndex: number
	private scrollSpeed: number = 3

	constructor({ bgSprite, spriteIndex }: { bgSprite: spriteType; spriteIndex: number }) {
		this.bg = bgSprite
		const originalBgWidth = this.bg.sprite.w / this.bg.frame.max
		const scaledBgWidth = (this.bg.sprite.w * this.bg.sprite.scale) / this.bg.frame.max
		const bgHeight = this.bg.sprite.h * this.bg.sprite.scale
		const count = Math.max(Math.ceil(window.innerWidth / scaledBgWidth), 2)

		this.speed = this.scrollSpeed * spriteIndex
		this.x = [...Array(count)].map((_x, i) => i * scaledBgWidth)
		this.w = scaledBgWidth
		this.h = bgHeight
		this.spriteIndex = spriteIndex
		this.spriteX = originalBgWidth * this.spriteIndex + 1 // 1px offset for safety
		this.spriteW = originalBgWidth - 2 // 2 px offest for safety
		this.count = count
		this.maxScrollW = scaledBgWidth * (count - 1)
	}

	public update() {
		if (!this.bg) return

		for (let i = 0; i < this.count; i++) this.x[i] -= this.speed
		for (let i = 0; i < this.count; i++)
			if (this.x[i] <= -this.w) this.x[i] = this.maxScrollW + this.x[(i + 1) % this.count]
	}

	public render(ctx: CanvasRenderingContext2D) {
		if (!this.bg) return

		for (let i = 0; i < this.count; i++) {
			ctx.drawImage(
				this.bg.img,
				this.spriteX,
				0,
				this.spriteW,
				this.bg.sprite.h,
				this.x[i],
				0,
				this.w,
				this.h
			)
		}
	}
}
