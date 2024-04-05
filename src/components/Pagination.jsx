import clsx from 'clsx'

const Pagination = ({ setPage, pages, currentPage }) => {
	return (
		<div className='pagination'>
			<button disabled={currentPage === 1} className='btn border' onClick={() => setPage(prev => prev - 1)}>
				Prev page
			</button>
			{Array(pages)
				.fill('')
				.map((_, page) => (
					<button
						onClick={() => setPage(page + 1)}
						className={clsx('btn border', currentPage === page + 1 && 'activePage')}
						key={page}
					>
						{page + 1}
					</button>
				))}
			<button disabled={currentPage === pages} className='btn border' onClick={() => setPage(prev => prev + 1)}>
				Next page
			</button>
		</div>
	)
}

export default Pagination
