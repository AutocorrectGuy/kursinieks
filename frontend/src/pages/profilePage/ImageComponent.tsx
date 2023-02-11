import { useEffect, useState } from 'react'
import { TailSpin } from 'react-loader-spinner'

interface Props {
	filename: string
	hClass: string
}

const ImageComponent: React.FC<Props> = ({ filename, hClass }) => {
	const [src, setSrc] = useState<string>('')
	const [loaded, setLoaded] = useState<boolean>(false)

	useEffect(() => {
		;(async () => {
			try {
				const response = await import(`../../assets/img/profile/${filename}`)
				setSrc(response.default)
				setLoaded(true)
			} catch (error) {
				console.error(error)
			}
		})()
	}, [filename])

	return (
		<>
			{!loaded ? (
				<TailSpin
					height="100"
					width="100"
					color="#0891b2"
					ariaLabel="tail-spin-loading"
					radius="3"
					wrapperClass={`flex w-full items-center justify-center my-auto ${hClass}`}
					visible={true}
				/>
			) : (
				<img
					src={src}
					alt={''}
				/>
			)}
		</>
	)
}

export default ImageComponent
