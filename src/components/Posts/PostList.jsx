import PostCard from './PostCard'
import s from './Posts.module.css'

const PostList = ({ items }) => {
	return (
		<ul className={s.list}>
			{items.map(post => (
				<PostCard key={post.id} post={post} />
			))}
		</ul>
	)
}

export default PostList
