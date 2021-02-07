import React from 'react'
import './styles/boys.css';
import adv from './static/adv.jpg'
import { Link } from 'react-router-dom';
import shirts from './static/shirts.jpg'
import pants from './static/pants.jpg'


function Boys() {
    return (
        <div className = "Boys container-fluid">

        <div className="row rootrow">

            <div className="col col-xl-6 col-md-12 col-sm-12 col-12 fht">
                    <img className = "p-2 rounded shadow" src ={adv} alt="img" style={{width : "100%"}} />
            </div>

            <div className="col col-xl-6 col-md-12 col-sm-12 col-12 sht">
                    
                   <div className="row secondcolumnsrow p-4">

                   <div className="col cols col-md-3 col-sm-6 col-6">
                            <img className = "p-2 rounded shadow" src ={shirts} alt="img" style={{width : "100%"}} />
                            <h5 className="section-heading m-1">Formal Clothing</h5>
                            <p>Find Formals here and Find lots of discounts on products</p>
                            <button style={{fontSize : "80%"}}>Coninue Shopping</button>
                    </div>

                    <div className="col cols col-md-3 col-sm-6 col-6">
                            <img className = "p-2 rounded shadow" src ={pants} alt="img" style={{width : "100%"}} />
                            <h5 className="section-heading m-1">Formal Clothing</h5>
                            <p>Find Formals here and Find lots of discounts on products</p>
                    </div>

                    <div className="col cols col-md-3 col-sm-6 col-6">
                            <img className = "p-2 rounded shadow" src ={shirts} alt="img" style={{width : "100%"}} />
                            <h5 className="section-heading m-1">Formal Clothing</h5>
                            <p>Find Formals here and Find lots of discounts on products</p>
                    </div>

                    <div className="col cols col-md-3 col-sm-6 col-6">
                            <img className = "p-2 rounded shadow" src ={pants} alt="img" style={{width : "100%"}} />  
                            <h5 className="section-heading m-1">Formal Clothing</h5>
                            <p>Find Formals here and Find lots of discounts on products</p>
                    </div>


                   </div>

            </div>

        </div>

            
        </div>
    )
}

export default Boys
