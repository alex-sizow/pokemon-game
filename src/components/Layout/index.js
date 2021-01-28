import './style.css';

const Layout = ({ id, title, desc }) => {
	const backgroundId = (id) => {
		if ((id = 1)) {
			return {
				backgroundImage: './assets/bg1.jpg',
			};
		} else if ((id = 2)) {
			return {
				backgroundColor: '#44014C',
			};
		} else if ((id = 3)) {
			return {
				backgroundImage: './assets/bg3.jpg',
			};
		}
	};

	const background = {
		backgroundImage: './assets/bg1.jpg',
	};

	return (
		<div style={background}>
			<section class='root' id={id}>
				<div class='wrapper'>
					<article>
						<div class='title'>
							<h3>{title}</h3>
							<span class='separator'></span>
						</div>
						<div class='desc full'>
							<p>{desc}</p>
						</div>
					</article>
				</div>
			</section>
		</div>
	);
};

export default Layout;
