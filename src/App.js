import React, { useEffect, useState } from 'react';
import { Link, Route, Routes, Router, BrowserRouter } from 'react-router-dom';

// Styles
import './App.css';

// Pages
import WelcomePage from './pages/WelcomePage';
import CoursesPage from './pages/CoursesPage';
import CourseInfoPage from './pages/CourseInfoPage';
import StoriesPage from './pages/StoriesPage';
import GuaranteedWorkPage from './pages/GuaranteedWorkPage';
import AboutUsPage from './pages/AboutUsPage';

// Components
import Navbar from './components/Navbar';

// Context
import { mainContext } from './context/mainContext';

// Hooks
import ScrollToTop from './hooks/ScrollToTop';


const App = () => {

	// Setting the selected course on link click events and also writing it to the local storage for keeping the site running after page refresh
	const [selectedCourse, setSelectedCourse] = useState("");

	// Keeping locale storage updated after selected course changes
	// useEffect(() => {
	// 	localStorage.setItem("selectedCourse", selectedCourse);
	// }, [selectedCourse]);


	// Specific course setter functions
	const setProofreader = () => {
		setSelectedCourse("proofreader");
	}

	const setEditor = () => {
		setSelectedCourse("editor");
	}

	const setCommunication = () => {
		setSelectedCourse("communication");
	}

	const setFormatting = () => {
		setSelectedCourse("formatting");
	}


	return (
		<BrowserRouter>
			<mainContext.Provider 
				value={{ selectedCourse, setSelectedCourse, setProofreader, setEditor, setCommunication, setFormatting }}
			>
				
				<ScrollToTop />

				<div className="App">
					<Navbar />

					<Routes>
						<Route path='/learn-it' element={<WelcomePage />} />
						<Route path='/coursesPage' element={<CoursesPage />} />
						<Route path='/courseInfoPage' element={<CourseInfoPage />} />
						<Route path='/storiesPage' element={<StoriesPage />} />
						<Route path='/guaranteedWorkPage' element={<GuaranteedWorkPage />} />
						<Route path='/aboutUsPage' element={<AboutUsPage />} />
					</Routes>
				</div>
			</mainContext.Provider>
		</BrowserRouter>
	);
}

export default App;
