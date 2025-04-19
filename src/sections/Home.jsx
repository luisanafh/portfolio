import React, { useContext } from 'react';
import { AppContext } from '../components/Header/components/context/AppContext';
import { me } from '../assets/images/index';
import './Home.css';
import { CV, RESUME } from '../assets/docs/index';

const Home = () => {
	const { language, texts, darkMode } = useContext(AppContext);
	return (
		<section className="home">
			<div className="container-descripcion">
				<img src={me} alt="Luisana" />
				<div className="description">
					<h1>{texts[language].heroTitle}</h1>
					<p>{texts[language].heroSubtitle}</p>
					<a
						href={texts[language].CV}
						className="btn-cv button"
						target="_blank"
					>
						{texts[language].downloadCV}
					</a>
				</div>
			</div>
		</section>
	);
};

export default Home;
