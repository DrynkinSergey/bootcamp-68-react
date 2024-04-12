import { useSelector } from 'react-redux'
import { selectFilteredData } from '../redux/topicSlice'
import { TopicCard } from '../components/TopicCard'

export const Home = () => {
	const topics = useSelector(selectFilteredData)
	return (
		<div>
			<h1>Active topics:</h1>
			<ul className='list'>
				{topics.map(topic => (
					<TopicCard key={topic.id} topic={topic} />
				))}
			</ul>
		</div>
	)
}
