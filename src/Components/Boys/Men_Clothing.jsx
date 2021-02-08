import React from 'react'
import axios from 'axios'
import { useState , useEffect} from 'react'


function Men_Clothing() {

    const url = 'https://fakestoreapi.com/products/1';

    const [product, setProduct] = useState(null);

    useEffect(()=>{
        axios.get(url)
        .then(response => {
            setProduct(response.data)
        })   
    },[url])


if(product)
{
    return (
        <div className = "row p-2 mt-4 bg-warning">

            <div className = "col p-2 col-xl col-md col-6  mt-2 ml-0  m-0 rounded">
                   <div className = "shadow rounded bg-light" style={{padding:"10px"}}>
                   {product.title}
                    <img src = {product.image} className = "rounded" alt="image" style={{width : "100%"}} />
                     <h1>{product.price}</h1>
                   </div>
            </div>
            <div className = "col p-2 col-xl col-md col-6  mt-2 ml-0  m-0 rounded">
            <div className = "shadow rounded bg-light" style={{padding:"10px"}}>
                   {product.title}
                    <img src = {product.image} className = "rounded" alt="image" style={{width : "100%"}} />
                     <h1>{product.price}</h1>
                   </div>
            </div>
            <div className = "col p-2 col-xl col-md col-6  mt-2 ml-0  m-0 rounded">
            <div className = "shadow rounded bg-light" style={{padding:"10px"}}>
                   {product.title}
                    <img src = {product.image} className = "rounded" alt="image" style={{width : "100%"}} />
                     <h1>{product.price}</h1>
                   </div>
            </div>
            <div className = "col p-2 col-xl col-md col-6  mt-2 ml-0  m-0 rounded">
            <div className = "shadow rounded bg-light" style={{padding:"10px"}}>
                   {product.title}
                    <img src = {product.image} className = "rounded" alt="image" style={{width : "100%"}} />
                     <h1>{product.price}</h1>
                   </div>
            </div>
            <div className = "col p-2 col-xl col-md col-6  mt-2 ml-0  m-0 rounded">
            <div className = "shadow rounded bg-light" style={{padding:"10px"}}>
                   {product.title}
                    <img src = {product.image} className = "rounded" alt="image" style={{width : "100%"}} />
                     <h1>{product.price}</h1>
                   </div>
            </div>
            <div className = "col p-2 col-xl col-md col-6  mt-2 ml-0  m-0 rounded">
            <div className = "shadow rounded bg-light" style={{padding:"10px"}}>
                   {product.title}
                    <img src = {product.image} className = "rounded" alt="image" style={{width : "100%"}} />
                     <h1>{product.price}</h1>
                   </div>
            </div>
            

        </div>
    )
}

return(
    <div>

    </div>
)

}

export default Men_Clothing