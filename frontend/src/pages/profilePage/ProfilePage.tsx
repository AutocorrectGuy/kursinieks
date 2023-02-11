import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import testGirlImg from '../../assets/img/test-girl-123.png'

const ProfilePage = () => {
	const NextBtn = () => (
		<button className="flex w-fit items-center rounded-lg bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 px-5 py-2.5 font-medium text-white hover:bg-gradient-to-br">
			Saglabāt
			<FontAwesomeIcon
				icon={faArrowRight}
				className="ml-2 -mr-1 h-4 w-4"
			/>
		</button>
	)

	const ProfileCard = () => {
		return (
			<div className="w-[320px] rounded-lg border border-cyan-900 p-4 shadow-lg shadow-cyan-700">
				<img
					className="mx-auto h-[350px] w-[280px] select-none border border-red-500"
					src={testGirlImg}
					alt="moja-devo4ka"
					onDragStart={(e) => {
						e.preventDefault()
						return false
					}}
				/>
				<div className="mb-2 p-5 text-center text-4xl font-semibold tracking-tight text-white">
					Marta
				</div>
				<div className="flex w-full justify-center">
					<NextBtn />
				</div>
			</div>
		)
	}

	return (
		<div className=" flex min-h-screen w-full items-center justify-center">
			<ProfileCard />
		</div>
	)
}

export default ProfilePage
