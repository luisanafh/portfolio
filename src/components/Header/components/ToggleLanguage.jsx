import React from 'react';
import './ToggleLanguage.css';
import { es, en } from '../../../assets/images/index';

const ToggleLanguage = ({ language, toggleLanguage }) => {
	return (
		<label className="language-switch">
			<input
				type="checkbox"
				checked={language === 'en'}
				onChange={toggleLanguage}
			/>
			<span className="language-slider round">
				<img
					src={es}
					alt="Español"
					className={`flag es-flag ${language === 'es' ? 'active' : ''}`}
				/>
				<img
					src={en}
					alt="English"
					className={`flag en-flag ${language === 'en' ? 'active' : ''}`}
				/>
			</span>
		</label>
	);
};

export default ToggleLanguage;
