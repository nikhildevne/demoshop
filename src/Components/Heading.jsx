import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/heading.css'


function Heading() {
    return (
        <div className = "heading">
            <div  className ="landr" style={{textAlign : "right" , paddingTop : "5px" , paddingBottom : "5px" , padding : "10px" }}> 
                 <span className = "lrandlr" style = {{marginRight : "5px", border : "1px solid black", padding : "4px", fontSize : "80%"}}>Login | Register</span>
            </div>
            <nav className="navbar bg-info p-1">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <span className = "title" ><i class="fab fa-opencart"></i> DemoShop</span>
                </a>
            </div>
            </nav>
        </div>
    )
}

export default Heading
