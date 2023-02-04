import './services/tailwindcss/output.css'
import Navbar from './components/Navbar'
import GameLayout from './components/GameLayout'

const App = () => (
	<div className="min-h-screen h-auto">
		<Navbar />
		<GameLayout />
	</div>
)

export default App
