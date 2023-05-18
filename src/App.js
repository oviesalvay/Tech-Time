import React, { Fragment } from 'react'
import './App.css';  
import Navbar from './component/navbar'
import Home from './page/home'
import Footer from './component/footer'
import './App.css';



const App = () => {
  return (
  <Fragment>
<Navbar/>
<Home/>
<Footer/>
  </Fragment>
  )
}
export default App;
