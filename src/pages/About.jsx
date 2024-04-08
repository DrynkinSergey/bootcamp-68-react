import { Link, Outlet } from 'react-router-dom'

const About = () => {
	return (
		<div>
			About
			<ul>
				<li>
					<Link to='company'>Company</Link>
				</li>
				<li>
					<Link to='team'>Team</Link>
				</li>
				<li>
					<Link to='career'>Career</Link>
				</li>
			</ul>
			<div>
				<Outlet />
			</div>
		</div>
	)
}

export default About
