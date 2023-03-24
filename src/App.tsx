import { useState } from 'react'
import TodoContainer from './components/TodoContainer'
import moonIcon from './assets/icon-moon.svg'
import sunIcon from './assets/icon-sun.svg'
import useWindowWide from './hooks/useWindowWidth'
import Body from './components/Body'
import bgImgMobileDark from './assets/bg-mobile-dark.jpg'
import bgImgMobileLight from './assets/bg-mobile-light.jpg'
import bgImgDesktopDark from './assets/bg-desktop-dark.jpg'
import bgImgDesktopLight from './assets/bg-desktop-light.jpg'

import './App.scss'

function App() {
  const [theme, setTheme] = useState('dark')
  const isWideScreen = useWindowWide(480)

  const toggleTheme = () => {
    let newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  const getBgImg = () => {
    let img
    if (isWideScreen && theme === 'dark')  {
      img = bgImgDesktopDark
    } else if (isWideScreen && theme === 'light') {
      img = bgImgDesktopLight
    } else if (!isWideScreen && theme === 'dark') {
      img =  bgImgMobileDark
    } else if (!isWideScreen && theme === 'light') {
      img = bgImgMobileLight
    }

    return img;
  }

  return (
    <Body bgColor={theme == 'dark' ? 'hsl(235, 21%, 11%)' : 'hsl(0, 0%, 98%)'} getBgImg={() => getBgImg()}>
    <TodoContainer theme={theme}>
      <div className="flex justify-between items-center">
        <h1 className='text-white font-semibold tracking-[.25em]'>TODO</h1>
        {theme == 'dark' ? 
          <img src={sunIcon} onClick={toggleTheme} /> :
          <img src={moonIcon} onClick={toggleTheme} />
      }
      </div>

      <div className="h-40 ">
        hgdwgh
      </div>
    </TodoContainer>

    </Body>
  )
}

export default App
