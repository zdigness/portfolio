// react
import React from 'react';
import Marquee from 'react-marquee-slider';

// images
// import aws from '../img/aws.png';
// import css from '../img/css.png';
// import django from '../img/django.png';
// import html from '../img/html.png';
// import js from '../img/js.png';
// import mongodb from '../img/mongodb.png';
// import mysql from '../img/mysql.png';
// import node from '../img/node.png';
// import postgres from '../img/postgres.png';
// import python from '../img/python.png';
// import react from '../img/react.png';
// import ts from '../img/ts.png';

// svgs
import csharp from '../svg/csharp.svg';
import java from '../svg/java.svg';
import js from '../svg/js.svg';
import python from '../svg/python.svg';
import rust from '../svg/rust.svg';
import ts from '../svg/ts.svg';
import aws from '../svg/aws.svg';
import css from '../svg/css.svg';
import django from '../svg/django.svg';
import html from '../svg/html.svg';
import mongodb from '../svg/mongodb.svg';
import mysql from '../svg/mysql.svg';
import postgres from '../svg/postgres.svg';
import react from '../svg/react.svg';
import gcp from '../svg/gcp.svg';
import postman from '../svg/postman.svg';
import nodejs from '../svg/nodejs.svg';
import firebase from '../svg/firebase.svg';
import docker from '../svg/docker.svg';

// css
import '../css/carousel.css';

export default function Carousel() {
	const images = [
		csharp,
		java,
		js,
		python,
		rust,
		ts,
		aws,
		css,
		django,
		html,
		mongodb,
		mysql,
		nodejs,
		postgres,
		react,
		gcp,
		postman,
		nodejs,
		firebase,
		docker,
	];

	return (
		<div className='flex items-center justify-start whitespace-nowrap bg-[#1E1E1E] mt-20 shadow-lg h-40 border-t-[1px] border-b-[1px] border-[#2b2b2b]'>
			<Marquee
				velocity={50}
				minScale={0.7}
				resetAfterTries={100}
				className='flex items-center justify-center'
			>
				{images.map((src, index) => (
					<img
						key={index}
						src={src}
						alt={`tech-${index}`}
						className='mx-20 mt-12 w-20 h-20'
					/>
				))}
			</Marquee>
		</div>
	);
}
