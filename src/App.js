import Header from './components/Header/index';
import Layout from './components/Layout/index';
import Footer from './components/Footer/index';
import './App.css';

const App = () => {
	return (
		<div className='App'>
			<Header
				title='This is title'
				descr='This is Description!'
			/>
			<Layout
				id='1'
				title='Передаю title'
				desc='Передал еще desc'
				urlBg={'/static/media/bg1.339e2b02.jpg'}
			/>
			<Layout
				id='2'
				title='Передаю title'
				desc='Передал еще desc'
				colorBg='#'
			/>
			<Layout
				id='3'
				title='Передаю title'
				desc='Передал еще desc'
				urlBg='/static/media/bg3.59f1c1e9.jpg'
			/>
			<Footer />
		</div>
	);
};

export default App;
