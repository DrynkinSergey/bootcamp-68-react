import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
ReactDOM.createRoot(document.getElementById('root')).render(
	// <StrictMode>
	<>
		<App />
		<ToastContainer autoClose={2000} />
	</>
	// </StrictMode>
)
