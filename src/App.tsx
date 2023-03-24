import { useEffect, useState } from 'react';
import TodoContainer from './components/TodoContainer';
import moonIcon from './assets/icon-moon.svg';
import sunIcon from './assets/icon-sun.svg';
import useWindowWide from './hooks/useWindowWidth';
import Body from './components/Body';
import bgImgMobileDark from './assets/bg-mobile-dark.jpg';
import bgImgMobileLight from './assets/bg-mobile-light.jpg';
import bgImgDesktopDark from './assets/bg-desktop-dark.jpg';
import bgImgDesktopLight from './assets/bg-desktop-light.jpg';

import './App.scss';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
	const [theme, setTheme] = useState('dark');
	const isWideScreen = useWindowWide(480);

	useEffect(() => {
		const lsTheme = localStorage.getItem('theme') || 'dark'
		setTheme(lsTheme)
	}, [])

	const toggleTheme = () => {
		let newTheme = theme === 'dark' ? 'light' : 'dark';
		setTheme(newTheme);
		localStorage.setItem('theme', newTheme)
	};

	const getBgImg = () => {
		let img;
		if (isWideScreen && theme === 'dark') {
			img = bgImgDesktopDark;
		} else if (isWideScreen && theme === 'light') {
			img = bgImgDesktopLight;
		} else if (!isWideScreen && theme === 'dark') {
			img = bgImgMobileDark;
		} else if (!isWideScreen && theme === 'light') {
			img = bgImgMobileLight;
		}

		return img;
  };
  
  const addTodo = (todo: string) => {
    console.log(todo)
  }

	return (
		<Body
			bgColor={theme == 'dark' ? 'hsl(235, 21%, 11%)' : 'hsl(236, 33%, 92%)'}
			getBgImg={() => getBgImg()}>
			<TodoContainer theme={theme}>
				<div className='flex justify-between items-center mb-10'>
					<h1 className='text-white font-semibold tracking-[.25em]'>TODO</h1>
					{theme == 'dark' ? (
						<img className='lg:cursor-pointer' src={sunIcon} onClick={toggleTheme} alt="light mode icon" />
					) : (
						<img className='lg:cursor-pointer' src={moonIcon} onClick={toggleTheme} alt="dark mode icon"/>
					)}
				</div>

				<TodoInput onSubmit={addTodo} theme={theme} />
				<TodoList theme={theme} />
			</TodoContainer>
		</Body>
	);
}

export default App;
