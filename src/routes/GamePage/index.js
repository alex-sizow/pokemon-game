import { useRouteMatch, Route, Switch } from 'react-router-dom';
import database from '../../service/firebase';
import Layout from '../../components/Layout/';
import PokemonCard from '../../components/PokemonCard';
import cn from 'classnames';
import s from './style.module.css';
import StartPage from './routes/Start';
import BoardPage from './routes/Board';
import FinishPage from './routes/Finish';
s;
// не понимаю иногда как работает гит
const GamePage = () => {
	const match = useRouteMatch();
	console.log(match);
	return (
		<Switch>
			<Route
				path={`${match.path}/`}
				exact
				component={StartPage}
			/>
			<Route
				path={`${match.path}/board`}
				component={BoardPage}
			/>
			<Route
				path={`${match.path}/finish`}
				component={FinishPage}
			/>
		</Switch>
	);
};

export default GamePage;
