import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom";

// components
import Home from './pages/Home'
import Carusel from './pages/Carusel'
import Carusel2 from './pages/Carusel2'
import Nav from './Components/Navbar'


const Router = () => {
    return (
        <BrowserRouter>
           
                <Nav />

            <Switch>

                <Route exact path = "/">
                   <Carusel />
                </Route>
              
                <Route path = "/carusel">
                   <Carusel2 />
                </Route>
                
                <Route  path = "/modal">
                   <Home />
                </Route>
            </Switch>

        </BrowserRouter>
    )
}

export default Router