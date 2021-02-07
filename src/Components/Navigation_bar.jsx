import React from 'react'
import { Link } from 'react-router-dom'
import './styles/navigation_bar.css'

function Navigation_bar() {
    return (
        <div className = "Navigation-bar center bg-warning">
                <Link to = "/" className ="links text-dark  "><i className="fas fa-home"></i> Home</Link>
                <Link to = "/Boys" className ="links text-dark "> <i className="fas fa-male"></i> Boys</Link>
                <Link to = "/Girls" className ="links text-dark "><i className="fas fa-female"></i> Girls</Link>
                <Link to = "/Childrens" className ="links text-dark "><i className="fas fa-child"></i> Children</Link> 
        </div>
    )
}

export default Navigation_bar
