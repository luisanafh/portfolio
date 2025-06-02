import React, { useContext } from 'react';
import './Contact.css';
import { AppContext } from '../components/Header/components/context/AppContext';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { BsWhatsapp, BsTelephone, BsEnvelope, BsMap } from 'react-icons/bs';

const Contact = () => {
	const { language, texts } = useContext(AppContext);

	return (
		<footer className="footer section">
			<div className="footer__container grid--container">
				<div className="footer__info">
					<h3 className="footer__title">Luisana Fuster</h3>
					<p className="footer__description">
						{texts[language].footerDescription}
					</p>

					<address className="footer__contact-info">
						<div className="footer__contact-item">
							<BsTelephone className="footer__contact-icon" />
							<span className="footer__contact-text">
								<a
									href="tel:+584169261705"
									target="_blank"
									rel="noreferrer nofollow"
								>
									+58 4169261705
								</a>
							</span>
						</div>

						<div className="footer__contact-item">
							<BsEnvelope className="footer__contact-icon" />
							<span className="footer__contact-text">
								<a
									href="mailto:luvifusterh@gmail.com"
									target="_blank"
									rel="noreferrer nofollow"
								>
									luvifusterh@gmail.com
								</a>
							</span>
						</div>

						<div className="footer__contact-item">
							<BsMap className="footer__contact-icon" />
							<span className="footer__contact-text">
								{texts[language].location}
							</span>
						</div>
					</address>
				</div>

				<div className="footer__social">
					<h3 className="footer__title">{texts[language].socialMedia}</h3>

					<div className="footer__social-icons">
						<ul>
							<li className="footer__social-item animation">
								<a
									href="https://github.com/luisanafh"
									className="footer__social-link"
									target="_blank"
									rel="noreferrer"
								>
									<FaGithub className="footer__social-icon" />
								</a>
							</li>
							<li className="footer__social-item animation">
								<a
									href="https://www.linkedin.com/in/luisana-fuster-hern%C3%A1ndez-a30a71245/"
									className="footer__social-link"
									target="_blank"
									rel="noreferrer"
								>
									<FaLinkedinIn className="footer__social-icon" />
								</a>
							</li>
							<li className="footer__social-item animation">
								<a
									href="https://wa.me/584169261705"
									className="footer__social-link"
									target="_blank"
									rel="noreferrer"
								>
									<FaWhatsapp className="footer__social-icon" />
								</a>
							</li>
						</ul>
					</div>

					<p className="footer__copy">
						&copy; {new Date().getFullYear()}{' '}
						{texts[language].allRightsReserved}
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Contact;
