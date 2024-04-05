import { useState } from 'react'
import Cart from './components/Cart'
import Header from './components/Header'
import Shop from './components/Shop'

const App = () => {
	const [selectedTab, setSelectedTab] = useState('home')
	const [query, setQuery] = useState('')
	return (
		<>
			<Header setSelectedTab={setSelectedTab} setQuery={setQuery} query={query} />
			{selectedTab === 'home' && <Shop query={query} />}
			{selectedTab === 'cart' && <Cart setSelectedTab={setSelectedTab} />}
		</>
	)
}

export default App
