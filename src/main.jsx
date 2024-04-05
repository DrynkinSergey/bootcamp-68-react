import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import CartProvider from './context/CartProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<CartProvider>
		<App />
		<ToastContainer autoClose={2000} />
	</CartProvider>
)

//props drilling
