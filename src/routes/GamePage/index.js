import { useState, useEffect } from 'react';
import database from '../../service/firebase';
import Layout from '../../components/Layout/';
import PokemonCard from '../../components/PokemonCard';
import cn from 'classnames';
import s from './style.module.css';
// не понимаю иногда как работает гит
const GamePage = () => {
	const handleClick = () => {};
	const [pokemons, setPokemons] = useState({});

	useEffect(() => {
		database.ref('pokemons').once('value', (snapshot) => {
			setPokemons(snapshot.val());
		});
	}, []);

	const handleClickCard = (id) => {
		Object.entries(pokemons).forEach((item) => {
			const pokemon = { ...item[1] };
			if (pokemon.id === id) {
				const objID = item[0];
				database.ref('pokemons/' + objID).then({
					...pokemon,
					active: !pokemon.active,
				});
			}
		});
	};

	return (
		<Layout id='2' title='Передаю title' colorBg='#ffea00'>
			<div className={cn(s.flex, s.column)}>
				<div className={s.root}>
					<h1>This is Game Page!!!</h1>
				</div>
				<button className={s.button} onClick={handleClick}>
					New Card
				</button>
			</div>
			<div className={s.flex}>
				{Object.entries(pokemons).map(
					([key, { name, img, id, type, values, active }]) => (
						<PokemonCard
							key={key}
							name={name}
							img={img}
							id={id}
							type={type}
							values={values}
							isActive={active}
							onClickCard={handleClickCard}
						/>
					)
				)}
			</div>
		</Layout>
	);
};

export default GamePage;
