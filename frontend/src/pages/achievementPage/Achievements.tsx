import QRCode from 'react-qr-code'
import './infiniteRotate.css'
import { pagesOptions } from '../../PagesOptions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faTrophy } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
const Achievements = () => {
	const [completedAchievements] = useState<string[]>(() => {
		const achievementsList = localStorage.getItem('achievements')
		return achievementsList ? achievementsList.split(',') : []
	})
	localStorage.setItem(
		'achievements',
		'a6d03472-a813-11ed-afa1-0242ac120002,b41506ee-a813-11ed-afa1-0242ac120002'
	)
	return (
		<div className="flex min-h-screen w-full flex-col items-center">
			<div className="flex items-center">
				<FontAwesomeIcon
					icon={faStar}
					className="rotating h-9 w-9 text-yellow-400"
				/>
				<div className="py-10 pl-3 text-3xl font-bold text-neutral-200">
					Sasniegumi
				</div>
			</div>

			<div className="grid grid-cols-2 sm:grid-cols-3">
				{pagesOptions
					.filter((item) => item.isAchievement)
					.map(({ textValue, href, id }, i) => (
						<div
							className={[
								'm-2 flex w-32 flex-col items-center rounded-lg bg-slate-700 py-4',
								completedAchievements.includes(id)
									? 'font-semibold text-white'
									: 'text-black',
							].join(' ')}
							key={`qr-code-${i}`}
						>
							<FontAwesomeIcon
								icon={faTrophy}
								className={[
									'h-16 w-16',
									completedAchievements.includes(id)
										? 'text-yellow-500'
										: 'text-black',
								].join(' ')}
							/>
							<div className="text-center">{textValue}</div>
							{/* <QRCode
							value={href}
							bgColor="#000000"
							fgColor="#AAAAAA"
							className="h-40 w-40"
						/> */}
						</div>
					))}
			</div>
		</div>
	)
}

export default Achievements
