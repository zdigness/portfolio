import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import Info from './components/layouts/info';
import AboutMe from './components/layouts/aboutme';
import Carousel from './components/layouts/carousel';
import Project from './components/layouts/project';

import './App.css';

function App() {
	return (
		<div>
			<Info />
			<AboutMe />
			<Carousel />
			<Project />
		</div>
	);
}

export default App;
