import { useState } from 'react'

const ProductDetails = ({ product }) => {
	const { title, description, price, thumbnail, brand, images } = product
	const [selectedImg, setSelectedImg] = useState(thumbnail)
	return (
		<section className='details'>
			<div className='infoBlock'>
				<img width='400' src={selectedImg} />
				<div>
					<h2>{title}</h2>
					<h3>{description}</h3>
					<p>{brand}</p>
					<p>{price}$</p>
				</div>
			</div>
			<h2>Gallery</h2>
			<ul className='detailsList'>
				{images.map(img => (
					<li key={img}>
						<img onClick={() => setSelectedImg(img)} width='250' src={img} />
					</li>
				))}
			</ul>
		</section>
	)
}

export default ProductDetails
