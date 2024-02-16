import React from 'react'
import Navbar from './Navbar'
import { Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Team from './Pages/Team'
import Events from './Pages/Events'
import Report from './Pages/Report'


function App() {
  return (
    <>
      <Navbar/>
	  	<Routes>
			<Route exact path='/' element={<Home/>}/>
			<Route exact path='/about' element={<About/>}/>
			<Route exact path='/events' element={<Events/>}/>
			<Route exact path='/team' element={<Team/>}/>
			<Route exact path='/contact' element={<Contact/>}/>
			<Route exact path="/viewreport" element={<Report />} />
			{/* <Route path="/viewreport/:url" render={({ props }) => <Report {...props} />} /> */}


		</Routes>
    </>
  )
}

export default App
