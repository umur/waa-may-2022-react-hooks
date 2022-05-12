import axios from 'axios';
import { useState } from 'react';
import {FaTimes} from 'react-icons/fa'
const Product = (props) => {

    const[productDetails, setProductDetails] = useState([]);
    const[clicked, setClicked] = useState(false);


    const displayProduct = (id) => {
            console.log(id);
            axios.get('http://localhost:8080/api/v1/products/'+id)
                .then(result => {
                console.log(result.data);
                setProductDetails(result.data)
                setClicked(!clicked)
        })
    }
    return (
        <>
        <div className={`task`} onClick = {() => displayProduct(props.product.id)}>
            <h3>{props.product.name}    <FaTimes style={{color:'red'}} onClick={() => props.onDelete(props.product.id)}></FaTimes></h3>
            <p>{props.product.price}</p>
        </div>
        <div> { clicked ? 
        <center>
        <p>Product Name : {productDetails.name}</p>
        <p>Product Price : {productDetails.price}</p>
        <p>Product Review :{productDetails.review}</p>
        </center> : ""
    }
        </div>
        </>

        
    ) 
}
export default Product