import './services/tailwindcss/output.css'
import { pagesOptions } from './PagesOptions'
import {
	RouteObject,
	RouterProvider,
	createBrowserRouter,
} from 'react-router-dom'
import React from 'react'
import NotFound from './pages/NotFound'
import DefaultLayout from './layouts/DefaultLayout'
import GameLayout from './components/game/GameLayout'
import Achievements from './pages/achievementPage/Achievements'

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
								component = <GameLayout />
								break
							case '/achievements':
								component = <Achievements />
								break
							case '/1':
								component = <GameLayout />
								break
							case '/2':
								component = <GameLayout />
								break
							case '/3':
								component = <GameLayout />
								break
							case '/4':
								component = <GameLayout />
								break
							case '/5':
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
