// react
import React from 'react';
import Marquee from 'react-marquee-slider';

// images
import aws from '../img/aws.png';
import css from '../img/css.png';
import django from '../img/django.png';
import html from '../img/html.png';
import js from '../img/js.png';
import mongodb from '../img/mongodb.png';
import mysql from '../img/mysql.png';
import node from '../img/node.png';
import postgres from '../img/postgres.png';
import python from '../img/python.png';
import react from '../img/react.png';
import ts from '../img/ts.png';

// css
import '../css/carousel.css';

export default function Carousel() {
	const images = [
		aws,
		css,
		django,
		html,
		js,
		mongodb,
		mysql,
		node,
		postgres,
		python,
		react,
		ts,
	];

	return (
		<div className='flex items-center justify-start whitespace-nowrap bg-[#1E1E1E] mt-20 shadow-lg h-40 border-t-[1px] border-b-[1px] border-[#2b2b2b]'>
			<Marquee
				velocity={70}
				minScale={0.7}
				resetAfterTries={100}
				className='flex items-center justify-center'
			>
				{images.map((src, index) => (
					<img
						key={index}
						src={src}
						alt={`tech-${index}`}
						className='w-16 h-16 mx-16 mt-12'
					/>
				))}
			</Marquee>
		</div>
	);
}
