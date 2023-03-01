import { spriteType } from './Types'
export const degToRad = (deg: number) => 0.01745329252 * deg

export class Bird {
	private CANVAS_W: number
	private CANVAS_H: number
	private GRAVITY = 0.5
	private ROTATION_FACTOR = 0.004
	private ACCELERATION = 0
	private ACCELERATION_FACTOR = 2
	private JUMP_HEIGHT = 20
	private BIRD_IS_DEAD = false
	private MAX_ROTATION_UP = degToRad(15)

	private bird: {
		sprite: spriteType
		x: number
		y: number
		rotation: number
		w: number
		h: number
		halfW: number
		halfH: number
	}

	constructor({
		canvasW,
		canvasH,
		birdSprite,
	}: {
		canvasW: number
		canvasH: number
		birdSprite: spriteType
	}) {
		this.CANVAS_W = canvasW
		this.CANVAS_H = canvasH

		const birdW = birdSprite.sprite.w * birdSprite.sprite.scale
		const birdH = birdSprite.sprite.h * birdSprite.sprite.scale
		this.bird = {
			sprite: birdSprite,
			x: this.CANVAS_W * 0.12,
			y: 0,
			rotation: 0,
			w: birdW,
			h: birdH,
			halfW: birdW / 2,
			halfH: birdH / 2,
		}
	}

	public handleClick() {
		if (this.BIRD_IS_DEAD) {
			this.bird.y = this.CANVAS_H - this.bird.h
			this.BIRD_IS_DEAD = false
			this.bird.rotation = 0
		}

		this.ACCELERATION = -this.JUMP_HEIGHT
	}

	public update() {
		if (this.bird.y < this.CANVAS_H - this.bird.halfH) {
			this.ACCELERATION += this.GRAVITY * this.ACCELERATION_FACTOR
		} else {
			if (!this.BIRD_IS_DEAD) {
				this.BIRD_IS_DEAD = true
				this.ACCELERATION = 0
			}
		}

		this.bird.y += this.ACCELERATION
		this.bird.rotation =
			this.ACCELERATION < 0
				? this.MAX_ROTATION_UP
				: this.bird.rotation + this.ACCELERATION * this.ROTATION_FACTOR
	}

	public render(ctx: CanvasRenderingContext2D) {
		ctx.save()
		ctx.translate(this.bird.x + this.bird.halfW, this.bird.y + this.bird.halfH)
		ctx.rotate(this.bird.rotation)
		ctx.drawImage(
			this.bird.sprite.img,
			// asset UV coords
			this.bird.sprite.frame.curr * this.bird.sprite.sprite.w,
			0,
			// asset Size
			this.bird.sprite.sprite.w,
			this.bird.sprite.sprite.h,
			// bird Pos
			-this.bird.halfW,
			-this.bird.halfH,
			this.bird.w,
			this.bird.h
		)
		ctx.restore()
	}
}
