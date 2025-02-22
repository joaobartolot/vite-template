import './App.css'
import Footer from './layout/Footer'
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
			<Footer />
		</PageWrapper>
	)
}

export default App
