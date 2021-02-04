import Menu from './Menu/index';
import NavBar from './NavBar/index';
import { useState } from 'react';

const MenuHeader = ({ bgActive }) => {
	const [active, setActive] = useState(null);

	const handleState = () => {
		setActive((prevState) => !prevState);
	};
	return (
		<div>
			<Menu isActive={active} />
			<NavBar
				isActive={active}
				bgActive={bgActive}
				onChangeState={handleState}
			/>
		</div>
	);
};

export default MenuHeader;
