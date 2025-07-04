import './styles/theme.css';
import './styles/global.css';

import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';

export function App() {
	return (
		<>
			<Container>
				<Logo />
			</Container>
			<Container>
				<Menu />
			</Container>
			<Container>
				<CountDown />
			</Container>
			<Container>
				<form className='form'>
					<div className='form-row'>
						<DefaultInput labelText='Task' id='meuInput' type='text' placeholder='Write a task...' disabled />
					</div>
					<div className='form-row'>
						<p>Lorem ipsum dolor sit amet.</p>
					</div>
					<div className='form-row'>
						<p>Ciclos</p>
						<p>0 0 0 0 0 0 0 </p>
					</div>
					<div className='form-row'>
						<button>Enviar</button>
					</div>
				</form>
			</Container>
		</>
	);
}
