import './styles/theme.css';
import './styles/global.css';

import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

export function App() {
	return (
		<>
			<Heading>
				Hello World
				<button>
					<TimerIcon />
				</button>
			</Heading>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vel aliquid vero molestiae praesentium ipsum ea sed
				voluptate nam cum dolorem eligendi optio veniam consequuntur doloribus, reprehenderit error est fugiat.
			</p>
		</>
	);
}
