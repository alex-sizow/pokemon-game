import {
	useLocation,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';

import HomePage from './routes/HomePage';
import GamePage from './routes/GamePage';
import AboutPage from './routes/AboutPage';
import ContactPage from './routes/ContactPage';
import NotFoundPage from './routes/NotFound';
import MenuHeader from './components/MenuHeader';
import Footer from './components/Footer';

import { FireBaseContext } from './context/firebaseContext';
import { Firebase } from './service/firebase';

import cn from 'classnames';

import s from './style.module.css';

const App = () => {
	const location = useLocation();
	const isPadding =
		location.pathname === '/' ||
		location.pathname === '/game/board';

	return (
		<FireBaseContext.Provider value={new Firebase()}>
			<Switch>
				<Route path='/404' component={NotFoundPage} />
				<Route>
					<>
						<MenuHeader bgActive={!isPadding} />
						<div
							className={cn(s.wrap, {
								[s.isHomePage]: isPadding,
							})}>
							<Switch>
								<Route path='/' exact component={HomePage} />
								<Route path='/home' component={HomePage} />
								<Route path='/game' component={GamePage} />
								<Route path='/about' component={AboutPage} />
								<Route path='/contact' component={ContactPage} />
								<Route render={() => <Redirect to='/404' />} />
							</Switch>
						</div>
						<Footer />
					</>
				</Route>
			</Switch>
		</FireBaseContext.Provider>
	);
};

export default App;
