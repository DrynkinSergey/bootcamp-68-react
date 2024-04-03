export const cutText = str => {
	return str.length > 120 ? `${str.slice(0, 120)}...` : str
}
