import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom";

// components
import Home from './pages/Home'
import Carusel from './pages/Carusel'

const Router = () => {
    return (
        <BrowserRouter>
           

            <Switch>

                <Route exact path = "/">
                   <Home />
                </Route>

                <Route path = "/carusel">
                   <Carusel />
                </Route>
            </Switch>

        </BrowserRouter>
    )
}

export default Router