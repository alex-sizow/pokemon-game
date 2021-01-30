import './style.css';
import background from './assets/bg3.jpg';
console.log(background);
const Layout = ({ id, title, desc, urlBg }) => {
	const style = {
		background: '#ffea00',
		backgroundImage: 'url(' + urlBg + ')',
	};

	return (
		<section style={style} class='root' id={id}>
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
	);
};

export default Layout;
