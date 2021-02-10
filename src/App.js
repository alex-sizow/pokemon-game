import {
	useRouteMatch,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import database from './service/firebase';
import cn from 'classnames';
import HomePage from './routes/HomePage';
import MenuHeader from './components/MenuHeader';
import Footer from './components/Footer';
import GamePage from './routes/GamePage';
import AboutPage from './routes/AboutPage';
import ContactPage from './routes/ContactPage';
import NotFound from './routes/NotFound';
//
import s from './style.module.css';

const App = () => {
	const match = useRouteMatch('/');
	return (
		<Switch>
			<Route path='/404' render={() => <h1>404 Not Found</h1>} />
			<Route>
				<>
					<MenuHeader bgActive={!match.isExact} />
					<div
						className={cn(s.wrap, {
							[s.isHomePage]: match.isExact,
						})}>
						<Switch>
							<Route path='/' exact component={HomePage} />
							<Route path='/home' component={HomePage} />
							<Route path='/game' component={GamePage} />
							<Route path='/contact' component={ContactPage} />
							<Route path='/about' component={AboutPage} />
							<Route
								render={() => () => (
									<Redirect to='/404'>{NotFound}</Redirect>
								)}
							/>
						</Switch>
						afsdf
						<Footer />
					</div>
				</>
			</Route>
		</Switch>
	);
};

export default App;
