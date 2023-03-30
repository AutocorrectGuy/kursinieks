import { useEffect, useRef, useState } from 'react'

const IMG_SRC: { src: string }[] = [{ src: '../../assets/img/flappy/' }]

const WebGLTest = () => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null)
	const images = useState<HTMLImageElement[] | null>(null)

	useEffect(() => {
		const promises: Promise<HTMLImageElement>[] = IMG_SRC.map(({ src }) => {
      return new Promise((resolve) => {
        const img = new Image()
        import(`../../${src}`).then((data) => {
          img.onload = () => resolve(data.default)
        })
      })

    })
	}, [])

	useEffect(() => {
		if (!images.length) throw new Error('No images have been loaded.')
		if(!images[0]) return

		canvasRef.current = document.createElement('canvas')
		canvasRef.current.id = 'spinning-canvas'
		canvasRef.current.style.backgroundColor = '#0078D4'
		canvasRef.current.style.height = `${window.innerHeight}px`
		canvasRef.current.style.width = `${window.innerWidth}px`

		const gl = canvasRef.current.getContext('webgl') as WebGLRenderingContext

		const texture = gl.createTexture() as WebGLTexture
		gl.activeTexture(gl.TEXTURE0)
		gl.bindTexture(gl.TEXTURE0, texture)

		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)

		// gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE, images[0])

		// Create vertex shader
		const vertexShaderSource = `
    attribute vec4 a_Position;
    attribute vec2 a_TexCoord;
    varying vec2 v_TexCoord;
    void main() {
      gl_Position = a_Position;
      v_TexCoord = a_TexCoord;
    }`
		const vertexShader = gl.createShader(gl.VERTEX_SHADER) as WebGLShader
		gl.shaderSource(vertexShader, vertexShaderSource)
		gl.compileShader(vertexShader)

		// Create fragment shader
		const fragmentShaderSource = `
    precision mediump float;
    uniform sampler2D u_Texture;
    varying vec2 v_TexCoord;
    void main() {
      gl_FragColor = texture2D(u_Texture, v_TexCoord);
    }`

		const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER) as WebGLShader
		gl.shaderSource(fragmentShader, fragmentShaderSource)
		gl.compileShader(fragmentShader)

		// create shader program
		const shaderProgram = gl.createProgram() as WebGLProgram
		gl.attachShader(shaderProgram, vertexShader)
		gl.attachShader(shaderProgram, fragmentShader)

		// gl.bindAttribLocation(shaderProgram)
	}, [images])

	return <div id="webgl-context" />
}

export default WebGLTest
