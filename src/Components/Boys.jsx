import React from 'react'
import './styles/boys.css';
import adv from './static/adv.jpg'
import shirts from './static/shirts.jpg'
import pants from './static/pants.jpg'
import Men_Clothing from './Boys/Men_Clothing';


function Boys() {
    return (
        <div className = "Boys container-fluid">
{/* First row starts here . . .  */}

        <div className="row rootrow p-1 pt-3 pb-3">

            <div className="col col-xl-6 col-md-12 col-sm-12 col-12 fht">
                    <img className = "img shadow bg-light p-1" src ={adv} alt="img" style={{width : "100%", height:"100%"}} />

            </div>

            <div className="col col-xl-6 col-md-12 col-sm-12 bg-light rounded col-12 sht">
                    
                   <div className="row secondcolumnsrow p-2">

                   <div className="col cols col-md-3 col-sm-6 col-6">
                            <img className = "img bg-warning p-1 rounded shadow" src ={shirts} alt="img" style={{width : "100%"}} />
                            <h5 className="section-heading m-1">Formal Clothing</h5>
                            <p className="pinfo">Find Formals here and Find lots of discounts on products</p>
                            <button style={{fontSize : "80%"}}>Coninue Shopping</button>
                    </div>

                    <div className="col cols col-md-3 col-sm-6 col-6">
                            <img className = "img bg-warning p-1 rounded shadow" src ={pants} alt="img" style={{width : "100%"}} />
                            <h5 className="section-heading m-1">Formal Clothing</h5>
                            <p className="pinfo">Find Formals here and Find lots of discounts on products</p>
                    </div>

                    <div className="col cols col-md-3 col-sm-6 col-6">
                            <img className = "imimg bg-warning p-1 rounded shadow" src ={shirts} alt="img" style={{width : "100%"}} />
                            <h5 className="section-heading m-1">Formal Clothing</h5>
                            <p className="pinfo">Find Formals here and Find lots of discounts on products</p>
                    </div>

                    <div className="col cols col-md-3 col-sm-6 col-6">
                            <img className = "img bg-warning p-1 rounded shadow" src ={pants} alt="img" style={{width : "100%"}} />  
                            <h5 className="section-heading m-1">Formal Clothing</h5>
                            <p className="pinfo">Find Formals here and Find lots of discounts on products</p>
                    </div>


                   </div>

            </div>

        </div>

        {/* First Row Ends here . . . */}

        <h1 className="API-info pl-4 pt-4">Below is the data Fetched Through API</h1>
        

            <Men_Clothing />
        </div>
    )
}

export default Boys
