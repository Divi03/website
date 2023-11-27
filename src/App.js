import React from 'react'
import Navbar from './Navbar'
import { Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Team from './Pages/Team'
import Events from './Pages/Events'

function App() {
  return (
    <>
      <Navbar/>
	  	<Routes>
			<Route exact path='/' element={<Home/>}></Route>
			<Route exact path='/about' element={<About/>}></Route>
			<Route exact path='/events' element={<Events/>}></Route>
			<Route exact path='/team' element={<Team/>}></Route>
			<Route exact path='/contact' element={<Contact/>}></Route>
		</Routes>
    </>
  )
}

export default App
