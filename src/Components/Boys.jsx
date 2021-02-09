import React from 'react'
import './styles/boys.css';
import adv from './static/adv.jpg'
import shirts from './static/shirts.jpg'
import Men_Clothing from './Boys/Men_Clothing';


function Boys() {
    return (
        <div className = "Boys container-fluid">
{/* First row starts here . . .  */}

        <div className="row rootrow shadow p-1 pt-3 mt-3 pb-3">

            <div className="col col-xl-6 col-md-12 col-sm-12 col-12 fht">
                    <img className = "img shadow bg-light p-1" src ={adv} alt="img" style={{width : "100%", height:"100%"}} />
                    <h4 className="saleinfo"> Sale on <br/>Feb 26 2021</h4>

            </div>

            <div className="col col-xl-6 col-md-12 col-sm-12 bg-light rounded col-12 sht">
                    
                   <div className="row secondcolumnsrow p-0">

                        <div className="col col-xl-3 col-md-6 col-sm-6 col-6 mt-2 mb-1">

                             <div className ="p-1 border">   

                                <div className ="p-0">
                                        <img src ={shirts} className = "infocartimage" alt="image" />
                                </div>

                                <div className ="p-0">
                                        <h5 className="demoimg">Cat Title</h5>
                                </div>

                                <div className ="p-0">
                                        <p>Cat Description</p>
                                </div>

                                </div>

                        </div>

                        <div className="col col-xl-3 col-md-6 col-sm-6 col-6 mt-2 mb-1">

                             <div className ="p-1 border">   

                                <div className ="p-0">
                                        <img src ={shirts} className = "infocartimage" alt="image" />
                                </div>

                                <div className ="p-0">
                                        <h5 className="demoimg">Cat Title</h5>
                                </div>

                                <div className ="p-0">
                                        <p>Cat Description</p>
                                </div>

                                </div>

                        </div>

                        <div className="col col-xl-3 col-md-6 col-sm-6 col-6 mt-2 mb-1">

                             <div className ="p-1 border">   

                                <div className ="p-0">
                                        <img src ={shirts} className = "infocartimage" alt="image" />
                                </div>

                                <div className ="p-0">
                                        <h5 className="demoimg">Cat Title</h5>
                                </div>

                                <div className ="p-0">
                                        <p>Cat Description</p>
                                </div>

                                </div>

                        </div>

                        <div className="col col-xl-3 col-md-6 col-sm-6 col-6 mt-2 mb-1">

                             <div className ="p-1 border">   

                                <div className ="p-0">
                                        <img src ={shirts} className = "infocartimage" alt="image" />
                                </div>

                                <div className ="p-0">
                                        <h5 className="demoimg">Cat Title</h5>
                                </div>

                                <div className ="p-0">
                                        <p>Cat Description</p>
                                </div>

                                </div>

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
