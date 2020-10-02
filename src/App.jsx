import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'

import Scan from './components/pages/Scan'
import Contact from './components/pages/Contact'
import About from './components/pages/About'
import Home from './components/pages/Home'
import NavBar from './components/common/NavBar'
import Footer from './components/common/Footer'
import Header from './components/common/Header'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'

function App () {
  return (
    <>
      <Container className='d-block d-sm-none'>
        <Router>
          <Row>
            <Switch>
              <Route path='/contact'>
                <Contact />
              </Route>
              <Route path='/about'>
                <About />
              </Route>
              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          </Row>
        </Router>
        <Row>
          <Footer />
        </Row>
      </Container>
      <Container className='App d-none d-sm-block' fluid>
        <Row>
          <Header />
        </Row>
        <Router>
          <Row>
            <NavBar />
          </Row>
          <Row>
            <Switch>
              <Route path='/contact'>
                <Contact />
              </Route>
              <Route path='/about'>
                <About />
              </Route>
              <Route path='/'>
                <Scan />
              </Route>
            </Switch>
          </Row>
        </Router>
        <Row>
          <Footer />
        </Row>
      </Container>
    </>
  )
}

export default App
