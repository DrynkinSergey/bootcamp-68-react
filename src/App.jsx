import AboutMe from './components/aboutMe/AboutMe'
import { Footer } from './components/footer/Footer'
import Header from './components/header/Header'
import WelcomeSection from './components/welcomeSection/WelcomeSection'

const App = () => {
	return (
		<div>
			<Header />
			<WelcomeSection />
			<AboutMe />
			<Footer />
		</div>
	)
}

export default App
