import Slider, { Settings as SliderSettings } from 'react-slick'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import ImageComponent from '../ImageComponent'
import 'slick-carousel/slick/slick.css'

type Props = {}

const FaceSlider = (props: Props) => {
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
		<Slider
			{...settings}
			className="mx-auto w-[256px]"
		>
			{[...Array(18)].map((x, i) => (
				<ImageComponent
					filename={`f (${i + 1}).png`}
					key={`prof-pic-${i}`}
				/>
			))}
		</Slider>
	)
}

export default FaceSlider
