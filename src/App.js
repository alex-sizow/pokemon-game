import HeaderBlock from './components/HeaderBlock/index';

import './App.css';

const AppList = () => {
	const items = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5'];
	const firstItems = <li>Item0</li>;
	return (
		<ul>
			{firstItems}
			{items.map((item) => (
				<li>{item + '!'}</li>
			))}
		</ul>
	);
};

const AppHeader = () => {
	return <h1 className='header'>This is test!</h1>;
};

const AppInput = () => {
	const placeholder = 'Type text...';
	return (
		<label>
			<input placeholder={placeholder} />
		</label>
	);
};

const App = () => {
	return (
		<div className='App'>
			<HeaderBlock title='This is new Title' />
		</div>
	);
};

export default App;
