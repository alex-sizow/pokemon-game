import Menu from './Menu/index';
import NavBar from './NavBar/index';
import { useState } from 'react';

const MenuHeader = () => {
	const [active, setActive] = useState(true);

	const handleState = () => {
		setActive(!active);
	};
	return (
		<div>
			<Menu isActive={active} />
			<NavBar onChangeState={handleState} />
		</div>
	);
};

export default MenuHeader;
