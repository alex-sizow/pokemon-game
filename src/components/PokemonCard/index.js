import { useState } from 'react';
import s from './style.module.css';
import cardBackSide from './assets/card-back-side.jpg';
import cn from 'classnames';

const PokemonCard = ({ name, img, id, type, values }) => {
	const [isActive, setActive] = useState(false);

	const handleClick = () => {
		setActive(!isActive);
	};

	return (
		<div className={s.root} onClick={handleClick}>
			<div
				className={cn(s.pokemonCard, { [s.active]: isActive })}>
				<div className={s.cardFront}>
					<div className={cn(s.wrap, s.front)}>
						<div className={cn(s.pokemon, s[type])}>
							<div className={s.value}>
								<div className={cn(s.count, s.top)}>
									{values.top}
								</div>
								<div className={cn(s.count, cn.right)}>
									{values.right}
								</div>
								<div className={cn(s.count, s.bottom)}>
									{values.bottom}
								</div>
								<div className={cn(s.count, s.left)}>
									{values.left}
								</div>
							</div>
							<div className={s.imgContainer}>
								<img src={img} alt={name} />
							</div>
							<div className={s.info}>
								<span className={s.number}>{id}</span>
								<h3 className={s.name}>{name}</h3>
								<small className={s.type}>
									Type: <span>{type}</span>
								</small>
							</div>
						</div>
					</div>
				</div>

				<div className={s.cardBack}>
					<div className={cn(s.wrap, cn.back)}>
						<img src={cardBackSide} alt={cn(s.Сard, s.Backed)} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default PokemonCard;
