import { FidgetSpinner } from 'react-loader-spinner'
import s from './Posts.module.css'

const Loader = () => {
	return (
		<div>
			<FidgetSpinner
				visible={true}
				height='280'
				width='280'
				ariaLabel='fidget-spinner-loading'
				wrapperStyle={{}}
				wrapperClass='fidget-spinner-wrapper'
			/>
		</div>
	)
}

export default Loader
