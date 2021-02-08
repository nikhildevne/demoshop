import React from 'react'
import axios from 'axios'
import { useState , useEffect} from 'react'

function Girls() {
   
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
        <div>
            {product.price}
        </div>
    )
}

return(
    <div>

    </div>
)


}



export default Girls
