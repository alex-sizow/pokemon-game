import styles from './style.module.css';
import background from './assets/bg1.jpg';
console.log(background);
const Layout = ({ id, title, urlBg, colorBg, children }) => {
	const style = {
		background: colorBg,
		backgroundImage: 'url(' + urlBg + ')',
	};

	return (
		<section style={style} className={styles.root} id={id}>
			<div className={styles.wrapper}>
				<article>
					<div className={styles.title}>
						<h3>{title}</h3>
						<span className={styles.separator}></span>
					</div>
					<div className={`${styles.desc} ${styles.full}`}>
						{children}
					</div>
				</article>
			</div>
		</section>
	);
};

export default Layout;
