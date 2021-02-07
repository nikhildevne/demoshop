import React from 'react'

function Search() {
    return (
        <div className = "search" style={{display : 'flex' , alignContent : 'center' , justifyContent : 'center' , padding : "10px"}}>
            <input className ="p-2" style= {{width : "40%"}} type = "search" placeholder = "Search Products" />
            <input type = "submit" className = "btn" style = {{border : "1px solid black" , marginLeft : '5px'}} value="Search"/>
        </div>
    )
}

export default Search
