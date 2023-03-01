import { dtType } from './CanvasGameClassTypes'

export default class CanvasGameClass {
	public dt: dtType
	public canvas: {
		w: number
		h: number
	}
	public ctx: CanvasRenderingContext2D | null

	constructor() {
		this.canvas = {
			w: window.innerWidth,
			h: window.innerHeight
		}
		this.dt = {
			prev: Date.now(),
			curr: Date.now(),
			elapsed: 0,
			lag: 0,
			frameDuration: 16,
		}
		this.ctx = null
	}

	public updateDT(callbackFn: () => void) {
		this.dt.curr = Date.now()
		this.dt.elapsed = this.dt.curr - this.dt.prev
		this.dt.prev = this.dt.curr
		this.dt.lag += this.dt.elapsed

		if (this.dt.lag >= this.dt.frameDuration) {
			callbackFn()
			this.dt.lag = 0
		}
	}
}
