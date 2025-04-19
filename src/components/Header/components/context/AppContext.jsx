import React, { createContext, useState } from 'react';
import { CV, RESUME } from '../../../../assets/docs/index';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [language, setLanguage] = useState('es');
	const [darkMode, setDarkMode] = useState(false);

	const toggleLanguage = () => {
		setLanguage((prevLanguage) => (prevLanguage === 'es' ? 'en' : 'es'));
	};

	const toggleDarkMode = () => {
		setDarkMode((prevDarkMode) => !prevDarkMode);
		document.documentElement.classList.toggle('dark-mode', !darkMode);
	};

	const texts = {
		es: {
			home: 'Inicio',
			about: 'Sobre mí',
			skills: 'Habilidades',
			portfolio: 'Portafolio',
			contact: 'Contáctame',
			heroTitle: 'Hola, soy Luisana Fuster',
			heroSubtitle: 'Soy desarrolladora Web',
			downloadCV: 'Descargar CV',
			aboutDescription:
				'¡Hola! Soy Luisana Fuster, desarrolladora frontend apasionada por crear experiencias digitales intuitivas y atractivas,con formación en Analisis y diseño de sistemas y certificaciones en desarrollo web full stack',
			skillsDescription:
				'Herramientas que domino, he desarrollado experiencia en múltiples tecnologías modernas, centrándome especialmente en el desarrollo web. Mi stack principal incluye:',

			viewDemo: 'VER DEMO',
			viewCode: 'VER CÓDIGO',
			viewDocumentation: 'VER DOCUMENTACIÓN',
			project1Title: 'Galleta de la Fortuna',
			project1Description:
				'Aplicación interactiva que muestra mensajes aleatorios al hacer clic en una galleta virtual. Desarrollada con JavaScript puro.',
			project2Title: 'App del Clima',
			project2Description:
				'Aplicación meteorológica que muestra el clima actual utilizando una API de pronóstico del tiempo. Desarrollada con React.',
			project3Title: 'Explorador de Rick and Morty',
			project3Description:
				'Aplicación que consume la API de Rick and Morty para mostrar personajes, ubicaciones y episodios de la serie.',
			project4Title: 'CRUD de Usuarios',
			project4Description:
				'Sistema básico para crear, leer, actualizar y eliminar usuarios. Desarrollado con React y una API mock.',
			project5Title: 'Pokédex Interactiva',
			project5Description:
				'Aplicación que consume la PokeAPI para mostrar información detallada de Pokémon, con búsqueda y filtrado.',
			project6Title: 'API de Sistema Bancario',
			project6Description:
				'API REST para un sistema bancario básico con operaciones de transferencia y gestión de cuentas.',
			project7Title: 'API para Mascotas Perdidas',
			project7Description:
				'API para sistema de reporte de mascotas perdidas con geolocalización y autenticación de usuarios.',

			footerDescription: 'Desarrolladora web full stack',
			sendWhatsapp: 'Enviar mensaje a WhatsApp',
			location: 'Caracas, Venezuela',
			socialMedia: 'Redes Sociales',
			allRightsReserved: 'Todos los derechos reservados',
			CV: CV,
		},
		en: {
			home: 'Home',
			about: 'About Me',
			skills: 'Skills',
			portfolio: 'Proyects',
			contact: 'Contact Me',
			heroTitle: 'Hi, I am Luisana Fuster',
			heroSubtitle: 'I am a Web Developer',
			downloadCV: 'Download CV',
			aboutDescription:
				'Hello! I am Luisana Fuster, a frontend developer passionate about creating intuitive and engaging digital experiences, with a background in Systems Analysis and Design, and certifications in full-stack web development.',
			skillsDescription:
				'Tools I master, I have developed experience in multiple modern technologies, focusing especially on web development. My main stack includes:',

			viewDemo: 'VIEW DEMO',
			viewCode: 'VIEW CODE',
			viewDocumentation: 'VIEW DOCUMENTATION',
			project1Title: 'Fortune Cookie',
			project1Description:
				'Interactive application that shows random messages when clicking on a virtual cookie. Developed with pure JavaScript.',
			project2Title: 'Weather App',
			project2Description:
				'Weather application that shows current weather using a weather forecast API. Developed with React.',
			project3Title: 'Rick and Morty Explorer',
			project3Description:
				'Application that consumes the Rick and Morty API to display characters, locations and episodes from the series.',
			project4Title: 'User CRUD',
			project4Description:
				'Basic system to create, read, update and delete users. Developed with React and a mock API.',
			project5Title: 'Interactive Pokédex',
			project5Description:
				'Application that consumes the PokeAPI to display detailed Pokémon information with search and filtering.',
			project6Title: 'Banking System API',
			project6Description:
				'REST API for a basic banking system with transfer operations and account management.',
			project7Title: 'Lost Pets API',
			project7Description:
				'API for lost pet reporting system with geolocation and user authentication.',

			footerDescription: 'Full stack web developer',
			sendWhatsapp: 'Send WhatsApp message',
			location: 'Caracas, Venezuela',
			socialMedia: 'Social Media',
			allRightsReserved: 'All rights reserved',
			CV: RESUME,
		},
	};

	return (
		<AppContext.Provider
			value={{ language, toggleLanguage, texts, darkMode, toggleDarkMode }}
		>
			{children}
		</AppContext.Provider>
	);
};
