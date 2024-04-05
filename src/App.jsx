import { useState } from 'react'
import Cart from './components/Cart'
import Header from './components/Header'
import Shop from './components/Shop'

const App = () => {
	const [selectedTab, setSelectedTab] = useState('home')
	return (
		<>
			<Header setSelectedTab={setSelectedTab} />
			{selectedTab === 'home' && <Shop />}
			{selectedTab === 'cart' && <Cart />}
		</>
	)
}

export default App
