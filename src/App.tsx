import './App.css'
import Navbar from './layout/Navbar'
import PageWrapper from './layout/PageWrapper'
import Hero from './sections/Hero'

function App() {
	return (
		<PageWrapper>
			<Navbar />
			<main className="overflow-hidden">
				<Hero />
			</main>
		</PageWrapper>
	)
}

export default App
