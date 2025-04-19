import React, { useState, useContext } from 'react';
import { Link } from 'react-scroll';
import { FaGlobe, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import { AppContext } from './context/AppContext';
import Logo from './Logo';
import ToggleDarkMode from './ToggleDarkmode';
import ToggleLanguage from './ToggleLanguage';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { language, toggleLanguage, texts, darkMode, toggleDarkMode } =
		useContext(AppContext);

	return (
		<nav
			className={`nav ${darkMode ? 'dark-mode' : ''}`}
			style={{ height: 'var(--header-height)' }}
		>
			<div className="container">
				<Logo />
				<ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
					<li>
						<Link
							to="home"
							smooth={true}
							duration={500}
							className="nav-link"
							onClick={() => setIsMenuOpen(false)}
						>
							{texts[language].home}
						</Link>
					</li>
					<li>
						<Link
							to="about"
							smooth={true}
							duration={500}
							className="nav-link"
							onClick={() => setIsMenuOpen(false)}
						>
							{texts[language].about}
						</Link>
					</li>
					<li>
						<Link
							to="skills"
							smooth={true}
							duration={500}
							className="nav-link"
							onClick={() => setIsMenuOpen(false)}
						>
							{texts[language].skills}
						</Link>
					</li>
					<li>
						<Link
							to="portfolio"
							smooth={true}
							duration={500}
							className="nav-link"
							onClick={() => setIsMenuOpen(false)}
						>
							{texts[language].portfolio}
						</Link>
					</li>
					<li>
						<Link
							to="contact"
							smooth={true}
							duration={500}
							className="nav-link"
							onClick={() => setIsMenuOpen(false)}
						>
							{texts[language].contact}
						</Link>
					</li>
				</ul>

				<div className="toggles">
					<ToggleDarkMode darkMode={darkMode} onChange={toggleDarkMode} />
					<ToggleLanguage language={language} toggleLanguage={toggleLanguage} />
				</div>

				<button
					className="menu-toggle"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					{isMenuOpen ? <FaTimes /> : <FaBars />}
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
