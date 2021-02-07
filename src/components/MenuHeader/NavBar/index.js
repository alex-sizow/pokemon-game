import s from './style.module.css';
import cn from 'classnames';

const NavBar = ({
	onChangeState,
	isActive,
	bgActive = false,
}) => {
	return (
		<nav
			id={s.navbar}
			className={cn({ [s.bgActive]: bgActive })}>
			<div className={s.navWrapper}>
				<p className={s.brand}>LOGO</p>
				<div
					onClick={onChangeState}
					className={cn(s.menuButton, { [s.active]: isActive })}>
					<span />
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
