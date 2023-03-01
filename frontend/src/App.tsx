import './services/tailwindcss/output.css'
import 'slick-carousel/slick/slick.css'
import 'react-loading-skeleton/dist/skeleton.css'

import { pagesOptions } from './PagesOptions'
import {
	RouterProvider,
	createBrowserRouter,
} from 'react-router-dom'
import React from 'react'
import NotFound from './pages/NotFound'
import DefaultLayout from './layouts/DefaultLayout'
import GameLayout from './components/game/GameLayout'
import Achievements from './pages/achievementPage/Achievements'
import Informatika from './pages/subjects/Informatika/Informatika';
import ProfilePage from './pages/profilePage/ProfilePage';
import FlappyGame from './pages/flappy/FlappyGame'

const App = () => (
	<RouterProvider
		router={createBrowserRouter([
			{
				path: '/',
				element: <DefaultLayout />,
				children: [
					...pagesOptions.map(({ href }) => {
						let component
						switch (href) {
							case '/':
								component = <ProfilePage />
								break
							case '/achievements':
								component = <Achievements />
								break
							case '/tema-1':
								component = <Informatika />
								break
							case '/tema-2':
								component = <FlappyGame />
								break
							case '/tema-3':
								component = <GameLayout />
								break
							case '/tema-4':
								component = <GameLayout />
								break
							case '/tema-5':
								component = <GameLayout />
								break
							default:
								component = <React.Fragment />
								break
						}
						return {
							path: href,
							element: component,
						}
					}),
				],
			},
			{ path: '*', element: <NotFound /> },
		])}
	/>
)

export default App
