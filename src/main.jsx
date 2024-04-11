import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<App />
			<ToastContainer autoClose={2000} />
		</PersistGate>
	</Provider>
)
