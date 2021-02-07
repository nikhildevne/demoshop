import React from 'react'
import './styles/home.css'

function Home() {
    return (
        <div className = "Home bg-light">
            <div className="message">
            <h1 className =" text-dark font-weight-bold"><i class="fab fa-opencart"></i> DemoShop Description</h1>
                  <hr/>
                  <p>DemoShop is the dummy E-Commerce Website which covers the React Js and its import Concepts Like Props , States , Component , Resfull Api, JSX and many
                    in this project we have Two modules , one module is for customers and second module is for the 
                  </p>
                  <span className="moto"><i class="far fa-hand-point-right"></i> We Offer Quality Clothings and Accesaries for Our Valuable Customers .</span>
            </div>
        </div>
    )
}

export default Home
