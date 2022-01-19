import React from 'react'
import ReactDOM from 'react-dom'
import AboutMe from './containers/AboutMe'
import Hobbie from './containers/Hobbie'
import NavBar from './components/NavBar'
import {BrowserRouter, Route} from 'react-router-dom'

const AppContainer = () => { // contains all your individual pages 
  return (
    <BrowserRouter>
    <NavBar style={{ background:'blue', width:'200px', marginBottom: '10px' }} />
      <Route component={AboutMe} exact path='/' / >
      <Route component={Hobbie} path='/hobbie' />
    </BrowserRouter>
   
  )

}







ReactDOM.render(<AppContainer />, document.querySelector('#root'))