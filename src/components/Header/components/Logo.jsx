import React from 'react';
import './Logo.css';

const Logo = ({ text, disabled = false, speed = 5, className = '' }) => {
	return (
		<div className="logo-container">
			<h1
				className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
				style={{ '--animation-duration': `${speed}s` }}
			>
				Luisana
			</h1>
		</div>
	);
};

export default Logo;
