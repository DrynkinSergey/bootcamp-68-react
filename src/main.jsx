import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { createContext } from 'react'
import { ContextProvider } from './context/ContextProvider.jsx'

const name = 'Petro'
const surname = 'Reactov'

export const MyContext = createContext()

ReactDOM.createRoot(document.getElementById('root')).render(
	// <StrictMode>
	<MyContext.Provider value={{ auto: 'Audi', age: 23 }}>
		<ContextProvider>
			<App name={name} surname={surname} />
			<ToastContainer autoClose={2000} />
		</ContextProvider>
	</MyContext.Provider>
	// </StrictMode>
)

//props drilling
