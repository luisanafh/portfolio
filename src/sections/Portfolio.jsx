import React, { useContext, useEffect } from 'react';
import './Portfolio.css';
import {
	IMGPRO1,
	IMGPRO2,
	IMGPRO3,
	IMGPRO4,
	IMGPRO5,
} from '../assets/images/index';
import { AppContext } from '../components/Header/components/context/AppContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Portfolio() {
	const { language, texts } = useContext(AppContext);

	useEffect(() => {
		AOS.init({
			duration: 800,
			easing: 'ease-in-out',
			once: true,
			offset: 100,
		});
	}, []);

	return (
		<section id="projects" className="projects section">
			<h2 className="projects__title section__title" data-aos="fade-down">
				{texts[language].projectsTitle}
			</h2>

			<div className="projects__container grid--container">
				<div
					className="projects__project"
					data-aos="fade-up"
					data-aos-delay="100"
				>
					<div className="projects__inner grid--container">
						<div className="projects__image">
							<img
								className="projects__image"
								src={IMGPRO1}
								alt="Galleta de la Fortuna"
								title="Galleta de la Fortuna"
								data-aos="zoom-in"
								data-aos-delay="200"
							/>
						</div>

						<div className="projects__info">
							<h3 className="projects__name">
								{texts[language].project1Title}
							</h3>
							<p className="projects__description">
								{texts[language].project1Description}
							</p>

							<div className="projects__buttons">
								<button className="btn projects__button" type="button">
									<a
										href="https://galletadelafortunaluisana.netlify.app/"
										target="_blank"
										rel="noopener noreferrer"
										className="projects__link"
									>
										{texts[language].viewDemo}
									</a>
								</button>
								<button className="btn projects__button" type="button">
									<a
										href="https://github.com/luisanafh/galleta-de-la-fortuna"
										className="projects__link"
										target="_blank"
										rel="noopener noreferrer"
									>
										{texts[language].viewCode}
									</a>
								</button>
							</div>
						</div>
					</div>
				</div>

				<div
					className="projects__project"
					data-aos="fade-up"
					data-aos-delay="150"
				>
					<div className="projects__inner grid--container">
						<div className="projects__image">
							<img
								className="projects__image"
								src={IMGPRO2}
								alt="App del Clima"
								title="Aplicación del clima"
								data-aos="zoom-in"
								data-aos-delay="250"
							/>
						</div>

						<div className="projects__info">
							<h3 className="projects__name">
								{texts[language].project2Title}
							</h3>
							<p className="projects__description">
								{texts[language].project2Description}
							</p>

							<div className="projects__buttons">
								<button className="btn projects__button" type="button">
									<a
										href="https://weatherproyect.netlify.app/"
										className="projects__link"
										target="_blank"
										rel="noopener noreferrer"
									>
										{texts[language].viewDemo}
									</a>
								</button>
								<button className="btn projects__button" type="button">
									<a
										href="https://github.com/luisanafh/weatherrproyect"
										className="projects__link"
										target="_blank"
										rel="noopener noreferrer"
									>
										{texts[language].viewCode}
									</a>
								</button>
							</div>
						</div>
					</div>
				</div>

				<div
					className="projects__project"
					data-aos="fade-up"
					data-aos-delay="200"
				>
					<div className="projects__inner grid--container">
						<div className="projects__image">
							<img
								className="projects__image"
								src={IMGPRO3}
								alt="Rick and Morty"
								title="Explorador de Rick and Morty"
								data-aos="zoom-in"
								data-aos-delay="300"
							/>
						</div>

						<div className="projects__info">
							<h3 className="projects__name">
								{texts[language].project3Title}
							</h3>
							<p className="projects__description">
								{texts[language].project3Description}
							</p>

							<div className="projects__buttons">
								<button className="btn projects__button" type="button">
									<a
										href="https://proyecto3rickandmorty.netlify.app/"
										className="projects__link"
										target="_blank"
										rel="noopener noreferrer"
									>
										{texts[language].viewDemo}
									</a>
								</button>
								<button className="btn projects__button" type="button">
									<a
										href="https://github.com/luisanafh/RickAndMorty"
										className="projects__link"
										target="_blank"
										rel="noopener noreferrer"
									>
										{texts[language].viewCode}
									</a>
								</button>
							</div>
						</div>
					</div>
				</div>

				<div
					className="projects__project"
					data-aos="fade-up"
					data-aos-delay="250"
				>
					<div className="projects__inner grid--container">
						<div className="projects__image">
							<img
								className="projects__image"
								src={IMGPRO4}
								alt="CRUD de Usuarios"
								title="Sistema CRUD de usuarios"
								data-aos="zoom-in"
								data-aos-delay="350"
							/>
						</div>

						<div className="projects__info">
							<h3 className="projects__name">
								{texts[language].project4Title}
							</h3>
							<p className="projects__description">
								{texts[language].project4Description}
							</p>

							<div className="projects__buttons">
								<button className="btn projects__button" type="button">
									<a
										href="https://usercrudproyect.netlify.app/"
										className="projects__link"
										target="_blank"
										rel="noopener noreferrer"
									>
										{texts[language].viewDemo}
									</a>
								</button>
								<button className="btn projects__button" type="button">
									<a
										href="https://github.com/luisanafh/userCrud"
										className="projects__link"
										target="_blank"
										rel="noopener noreferrer"
									>
										{texts[language].viewCode}
									</a>
								</button>
							</div>
						</div>
					</div>
				</div>

				<div
					className="projects__project"
					data-aos="fade-up"
					data-aos-delay="300"
				>
					<div className="projects__inner grid--container">
						<div className="projects__image">
							<img
								className="projects__image"
								src={IMGPRO5}
								alt="Pokédex"
								title="Pokédex interactiva"
								data-aos="zoom-in"
								data-aos-delay="400"
							/>
						</div>

						<div className="projects__info">
							<h3 className="projects__name">
								{texts[language].project5Title}
							</h3>
							<p className="projects__description">
								{texts[language].project5Description}
							</p>

							<div className="projects__buttons">
								<button className="btn projects__button" type="button">
									<a
										href="https://pokedexproject5.netlify.app/#/"
										className="projects__link"
										target="_blank"
										rel="noopener noreferrer"
									>
										{texts[language].viewDemo}
									</a>
								</button>
								<button className="btn projects__button" type="button">
									<a
										href="https://github.com/luisanafh/pokedex"
										className="projects__link"
										target="_blank"
										rel="noopener noreferrer"
									>
										{texts[language].viewCode}
									</a>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div
					className="projects__project"
					data-aos="fade-up"
					data-aos-delay="350"
				>
					<div className="projects__inner grid--container">
						<div className="projects__info">
							<h3 className="projects__name">
								{texts[language].project6Title}
							</h3>
							<p className="projects__description">
								{texts[language].project6Description}
							</p>

							<div className="projects__buttons">
								<button className="btn projects__button" type="button">
									<a
										href="https://documenter.getpostman.com/view/42950214/2sB2cPkRad"
										className="projects__link"
										target="_blank"
										rel="noopener noreferrer"
									>
										{texts[language].viewDocumentation}
									</a>
								</button>
								<button className="btn projects__button" type="button">
									<a
										href="https://github.com/luisanafh/bankapi"
										className="projects__link"
										target="_blank"
										rel="noopener noreferrer"
									>
										{texts[language].viewCode}
									</a>
								</button>
							</div>
						</div>
					</div>
				</div>

				<div
					className="projects__project"
					data-aos="fade-up"
					data-aos-delay="400"
				>
					<div className="projects__inner grid--container">
						<div className="projects__info">
							<h3 className="projects__name">
								{texts[language].project7Title}
							</h3>
							<p className="projects__description">
								{texts[language].project7Description}
							</p>

							<div className="projects__buttons">
								<button className="btn projects__button" type="button">
									<a
										href="https://documenter.getpostman.com/view/42950214/2sAYkKGwgm#e843cef8-3fc7-49be-a75c-562310021a9e"
										className="projects__link"
										target="_blank"
										rel="noopener noreferrer"
									>
										{texts[language].viewDocumentation}
									</a>
								</button>
								<button className="btn projects__button" type="button">
									<a
										href="https://github.com/luisanafh/apilostpet"
										className="projects__link"
										target="_blank"
										rel="noopener noreferrer"
									>
										{texts[language].viewDemo}
									</a>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Portfolio;
