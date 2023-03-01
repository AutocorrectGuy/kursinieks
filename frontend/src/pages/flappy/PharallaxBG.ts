import { spriteType } from './Types'

export class PharallaxBG {
	private bg: spriteType

	private L1: {
		speed: number
		x: number[]
		w: number
		h: number
		count: number
		maxScrollW: number
		spriteIndex: number
	}

	constructor({ bgSprite, spriteIndex }: { bgSprite: spriteType; spriteIndex: number }) {
		this.bg = bgSprite
		const bgWidth = (this.bg.sprite.w * this.bg.sprite.scale) / 3
		const bgHeight = this.bg.sprite.h * this.bg.sprite.scale

		//TODO: calculate automatically how many images should need to cover whole bg
		const count = 3

		this.L1 = {
			speed: 3 * spriteIndex,
			x: [...Array(count)].map((_x, i) => i * bgWidth),
			w: bgWidth,
			h: bgHeight,
			count: count,
			maxScrollW: bgWidth * (count - 1),
			spriteIndex
		}
	}

	public update() {
		if (!this.bg) return

		for (let i = 0; i < this.L1.count; i++) this.L1.x[i] -= this.L1.speed
		for (let i = 0; i < this.L1.count; i++)
			if (this.L1.x[i] <= -this.L1.w)
				this.L1.x[i] = this.L1.maxScrollW + this.L1.x[(i + 1) % this.L1.count]
	}

	public render(ctx: CanvasRenderingContext2D) {
		if (!this.bg) return

		const color = ['red', 'green', 'blue']
		for (let i = 0; i < this.L1.count; i++) {
			ctx.drawImage(
				this.bg.img,
				(this.bg.sprite.w / 3) * this.L1.spriteIndex + 1,
				0,
				this.bg.sprite.w / 3 - 2,
				this.bg.sprite.h,
				this.L1.x[i],
				0,
				this.L1.w,
				this.L1.h
			)
			// ctx.strokeStyle = color[i]
			// ctx.lineWidth = 6
			// ctx.strokeRect(this.L1.x[i], 0, this.L1.w, this.L1.h)
		}
	}
}
