import { cutText } from '../../helpers/cutText'
import s from './Posts.module.css'

const PostCard = ({ post, showPost }) => {
	const { title = 'Default title', body = 'Default body' } = post
	return (
		<li className={s.card}>
			<h2>{title}</h2>
			<p>{cutText(body)}</p>
			<div>
				<button onClick={() => showPost(post)} className='btn border'>
					Read more
				</button>
				<button className='btn border'>Add to fav</button>
			</div>
		</li>
	)
}

export default PostCard
