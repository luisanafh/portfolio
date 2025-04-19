import { useState, useEffect, useRef, useContext } from 'react';
import {
	html,
	css,
	js,
	react,
	node,
	ts,
	w,
	postgreSQL,
} from '../assets/images/index';
import { AppContext } from '../components/Header/components/context/AppContext';
import './Skills.css';

const SkillsCarousel = () => {
	const { language, texts } = useContext(AppContext);

	const [currentSlide, setCurrentSlide] = useState(0);
	const sliderRef = useRef(null);
	const intervalRef = useRef(null);
	const [isTransitioning, setIsTransitioning] = useState(true);

	const originalSlides = [
		{ img: html, title: 'HTML' },
		{ img: css, title: 'CSS' },
		{ img: js, title: 'Javascript' },
		{ img: react, title: 'React' },
		{ img: w, title: 'Wordpress' },
		{ img: node, title: 'Node.js' },
		{ img: ts, title: 'TypeScript' },
		{ img: postgreSQL, title: 'PostgreSQL' },
	];

	const slides = [
		originalSlides[originalSlides.length - 1],
		...originalSlides,
		originalSlides[0],
	];

	const totalSlides = originalSlides.length;
	const totalDisplaySlides = slides.length;

	const nextSlide = () => {
		setIsTransitioning(true);
		setCurrentSlide((prev) => {
			if (prev >= totalDisplaySlides - 1) return 0;
			return prev + 1;
		});
	};

	const prevSlide = () => {
		setIsTransitioning(true);
		setCurrentSlide((prev) => {
			if (prev <= 0) return totalDisplaySlides - 1;
			return prev - 1;
		});
	};

	const resetAutoPlay = () => {
		clearInterval(intervalRef.current);
		startAutoPlay();
	};

	const startAutoPlay = () => {
		intervalRef.current = setInterval(() => {
			nextSlide();
		}, 3000);
	};

	useEffect(() => {
		startAutoPlay();
		return () => clearInterval(intervalRef.current);
	}, []);

	useEffect(() => {
		if (!isTransitioning) {
			if (currentSlide === 0) {
				setTimeout(() => {
					setIsTransitioning(false);
					setCurrentSlide(totalDisplaySlides - 2);
				}, 0);
			} else if (currentSlide === totalDisplaySlides - 1) {
				setTimeout(() => {
					setIsTransitioning(false);
					setCurrentSlide(1);
				}, 0);
			}
		}
	}, [currentSlide, isTransitioning, totalDisplaySlides]);

	const getTransformValue = () => {
		return `translateX(${-currentSlide * (100 / totalDisplaySlides)}%)`;
	};

	return (
		<section id="skills" className="skills section">
			<div className="skills__container grid--container">
				<p className="skills__description flex--container">
					{texts[language].skillsDescription}
				</p>

				<div className="slider-container">
					<div className="slider-wrapper">
						<div
							className="slider"
							ref={sliderRef}
							style={{
								transform: getTransformValue(),
								transition: isTransitioning
									? 'transform 0.5s ease-in-out'
									: 'none',
								width: `${totalDisplaySlides * 100}%`,
							}}
							onTransitionEnd={() => setIsTransitioning(false)}
						>
							{slides.map((slide, index) => (
								<div
									key={index}
									className="slider__item"
									style={{ width: `${100 / totalDisplaySlides}%` }}
								>
									<img src={slide.img} alt={slide.title} />
									<h3 className="skills__card-title">{slide.title}</h3>
								</div>
							))}
						</div>
						<button
							onClick={() => {
								prevSlide();
								resetAutoPlay();
							}}
							className="slider-control prev"
						>
							‹
						</button>
						<button
							onClick={() => {
								nextSlide();
								resetAutoPlay();
							}}
							className="slider-control next"
						>
							›
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SkillsCarousel;
