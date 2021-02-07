import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigation_bar from './Navigation_bar'
import Boys from './Boys'
import Home from './Home'
import Girls from './Girls'
import Childrens from './Childrens'
import Boys_formal from './Boys/Boys_formal'


function Routing() {
    return (
        <div>
            <Router>
                <Navigation_bar />
                    <Switch>
                        <Route exact path = "/" component ={ Home } />
                        <Route exact path = "/Boys" component ={ Boys } />
                        <Route exact path = "/Girls" component ={ Girls } />
                        <Route exact path = "/Childrens" component ={ Childrens } />
                        {/* <Route exact path = "/Formals" component = {Boys_formal} /> */}
                    </Switch>
            </Router>
        </div>
    )
}

export default Routing
