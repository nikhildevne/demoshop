import React from 'react'
import axios from 'axios'
import { useState , useEffect} from 'react'
import './styles/men_clothing.css'


function Men_Clothing() {

    const url = `https://fakestoreapi.com/products`;

    const [product, setProduct] = useState([]);

    useEffect(async ()=>{
       await axios.get(url)
        .then(response => {
            setProduct(response.data)
        })   
    },[url])


if(product)
{
    return (
        <div className = "row item-row p-1 mt-4 shadow mb-5 bg-warning">

        {product.map((item)=> 

        (item.category === "men clothing") && 

            <div className = " colss p-1 col-xl-2 col-md col-6  mt-2 ml-0  m-0 rounded">
                   <div className = "clothes p-2 shadow rounded bg-light " style={{padding:"10px"}}>                  
                    <img src = {item.image} className = "rounded p-2" alt="image" style={{width : "100%"}} />
                    {/* <p className = "disc"> {item.description} </p> */}
                    <h5 className ="cloth-title"> {item.title} </h5>
                     <h5 className ="cloth-price text-primary">{item.price} Rs.</h5>
                   </div>
            </div>
          

            )}

        </div>
    )
}

return(
    <div>

    </div>
)

}

export default Men_Clothing