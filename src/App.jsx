import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from './components/Header/components/context/AppContext';
import Navbar from './components/Header/components/NavBar';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';
import Loader from './components/Loader'; // Asegúrate de tener la ruta correcta

const App = () => {
	const { language, texts, darkMode } = useContext(AppContext);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Simula tiempo de carga (puedes reemplazar esto con tus cargas reales)
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 2000); // 2 segundos de carga

		return () => clearTimeout(timer);
	}, []);

	if (isLoading) {
		return (
			<div className={`full-page-loader ${darkMode ? 'dark-mode' : ''}`}>
				<Loader />
			</div>
		);
	}

	return (
		<div className={darkMode ? 'dark-mode' : ''}>
			<Navbar />
			<section
				id="home"
				className="section"
				style={{ paddingTop: 'var(--header-height)' }}
			>
				<Home />
			</section>

			<section id="about" className="section sAbout">
				<h2 className="section__title"> {texts[language].about}</h2>
				<About />
			</section>

			<section id="skills" className="section sSkills">
				<h2 className="section__title">{texts[language].skills}</h2>
				<Skills />
			</section>
			<section id="portfolio" className="section sPortfolio">
				<h2 className="section__title">{texts[language].portfolio}</h2>
				<Portfolio />
			</section>

			<section id="contact" className="section sContact">
				<h2 className="section__title">{texts[language].contact}</h2>
				<Contact />
			</section>
		</div>
	);
};

export default App;
