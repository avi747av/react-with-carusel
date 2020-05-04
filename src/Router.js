import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom";

// components
import Home from './pages/Home'
import Carusel from './pages/Carusel'
import Nav from './Components/Navbar'


const Router = () => {
    return (
        <BrowserRouter>
           
                <Nav />

            <Switch>

                <Route exact path = "/">
                   <Carusel />
                </Route>
                
                <Route  path = "/modal">
                   <Home />
                </Route>
            </Switch>

        </BrowserRouter>
    )
}

export default Router