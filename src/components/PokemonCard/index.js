import s from './style.module.css';
import cardBackSide from './assets/card-back-side.jpg';

const PokemonCard = ({ name, img, id, type, values }) => {
	return (
		<div className={s.root}>
			<div className={s.pokemonCard}>
				<div className={s.cardFront}>
					<div className={`&{s.wrap} ${s.front}`}>
						<div className={`${s.pokemon} ${s[type]}`}>
							<div className={s.value}>
								<div className={`${s.count} ${s.top}`}>
									{values.top}
								</div>
								<div className={`${s.count} ${s.right}`}>
									{values.right}
								</div>
								<div className={`${s.count} ${s.bottom}`}>
									{values.bottom}
								</div>
								<div className={`${s.count} ${s.left}`}>
									{values.left}
								</div>
							</div>
							<div className={s.imgContainer}>
								<img src={img} alt={name} />
							</div>
							<div className={s.info}>
								<span className={s.number}></span>
								<h3 className={s.name}></h3>
								<small className={s.type}>
									Type: <span>{type}</span>
								</small>
							</div>
						</div>
					</div>
				</div>

				<div className={s.cardBack}>
					<div className={`${s.wrap} {s.back}`}>
						<img
							src={cardBackSide}
							alt={`${s.Сard} ${s.Backed}`}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PokemonCard;
