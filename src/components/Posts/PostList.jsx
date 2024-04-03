import PostCard from './PostCard'
import s from './Posts.module.css'

const PostList = ({ items, showPost }) => {
	return (
		<ul className={s.list}>
			{items.map(post => (
				<PostCard key={post.id} post={post} showPost={showPost} />
			))}
		</ul>
	)
}

export default PostList
