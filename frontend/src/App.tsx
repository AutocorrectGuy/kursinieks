import Game from './pages/Game'
import NotFound from './pages/NotFound'
import './services/tailwindcss/output.css'
import {
	RouterProvider,
	createBrowserRouter,
} from 'react-router-dom'

const App = () => (
	<RouterProvider
		router={createBrowserRouter([
			{ path: '/', element: <Game /> },
			{ path: '*', element: <NotFound /> },
		])}
	/>
)

export default App
