import React from 'react'
import { Triangle } from 'react-loader-spinner'

const Loader = () => {
	return (
		<div className='loader'>
			<Triangle
				visible={true}
				height='480'
				width='480'
				color='#0314d4'
				ariaLabel='triangle-loading'
				wrapperStyle={{}}
				wrapperClass=''
			/>
		</div>
	)
}

export default Loader
