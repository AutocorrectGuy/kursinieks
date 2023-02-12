import Slider, { Settings as SliderSettings } from 'react-slick'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'

const FaceSlider = () => {
	const [images, setImages] = useState<string[]>([])
	const [imagesLoaded, setImagesLoaded] = useState<boolean>(false)

	useEffect(() => {
		Promise.all(
			[...Array(18)].map(
				async (x, i) => import(`../../../assets/img/profile/f (${i + 1}).png`)
			)
		).then((srcArr) => {
			setImages(srcArr.map((src) => src.default))
			setImagesLoaded(true)
		})
	}, [])

	var settings: SliderSettings = {
		infinite: true,
		speed: 150,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: (
			<div className="block">
				<div
					className={
						'absolute left-0 top-1/2 z-10 flex h-[250px] w-[24px] -translate-y-1/2 -translate-x-[100%] cursor-pointer items-center justify-center text-cyan-300 hover:text-white'
					}
				>
					<FontAwesomeIcon
						icon={faChevronLeft}
						className={`h-[80px] scale-x-75`}
					/>
				</div>
			</div>
		),
		nextArrow: (
			<div className="block">
				<div
					className={
						'absolute right-0 top-1/2 z-10 flex h-[250px] w-[24px] -translate-y-1/2 translate-x-[100%] cursor-pointer items-center justify-center text-cyan-300 hover:text-white'
					}
				>
					<FontAwesomeIcon
						icon={faChevronRight}
						className={`h-[80px] scale-x-75`}
					/>
				</div>
			</div>
		),
	}
	return (
		<div className="h-[320px]">
			{!imagesLoaded ? (
				<Skeleton baseColor='#1E293B' highlightColor='#18354E' height={320} />
			) : (
				<Slider
					{...settings}
					className="mx-auto h-[320px] w-[256px]"
				>
					{images.map((image) => (
						<img
							src={image}
							alt=""
						/>
					))}
				</Slider>
			)}
		</div>
	)
}

export default FaceSlider
