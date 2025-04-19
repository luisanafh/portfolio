import React, { useContext } from 'react';
import { AppContext } from '../components/Header/components/context/AppContext';
import { imgDes1, imgDes2, imgDes3 } from '../assets/images/index';
import './About.css';

function About() {
	const { language, texts, darkMode } = useContext(AppContext);
	return (
		<div className="about__container grid--container">
			<p className="about__description">{texts[language].aboutDescription}</p>

			<div className="about__cards flex--container">
				<div className="about__card">
					<img
						className="about__card--img"
						src={imgDes1}
						alt="Programming"
						title="Programming"
					/>
				</div>

				<div className="about__card">
					<img
						className="about__card--img"
						src={imgDes2}
						alt="Updating the database"
						title="Updating the database"
					/>
				</div>

				<div className="about__card">
					<img
						className="about__card--img"
						src={imgDes3}
						alt="troubleshooting"
						title="troubleshooting"
					/>
				</div>
			</div>
		</div>
	);
}

export default About;
