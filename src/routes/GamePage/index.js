import { useState, useEffect } from 'react';
import database from '../../service/firebase';
import Layout from '../../components/Layout/';
import PokemonCard from '../../components/PokemonCard';
import s from './style.module.css';

const GamePage = () => {
	const [pokemons, setPokemons] = useState({});

	useEffect(() => {
		database.ref('pokemons').once('value', (snapshot) => {
			setPokemons(snapshot.val());
		});
	}, []);

	const handleClickCard = (id) => {
		setPokemons((prevState) => {
			return Object.entries(prevState).reduce((acc, item) => {
				const pokemon = { ...item[1] };
				if (pokemon.id === id) {
					pokemon.active = true;
				}

				acc[item[0]] = pokemon;

				return acc;
			}, {});
		});
	};

	return (
		<Layout id='2' title='Передаю title' colorBg='#ffea00'>
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
