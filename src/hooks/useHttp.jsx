import { useEffect, useState } from 'react'

export const useHttp = (fn, param) => {
	const [data, setData] = useState(null)
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(false)
	useEffect(() => {
		setLoading(true)
		fn(param)
			.then(data => setData(data))
			.catch(() => setError(true))
			.finally(() => setLoading(false))
	}, [fn, param])
	return [data, setData, { loading, error }]
}
