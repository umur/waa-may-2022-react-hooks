import { useState, useEffect } from 'react';
import ProductTable from './product-list';
import axios from 'axios';


function Product() {
    
    const [productState, setProductState] = useState([
        { id: 0,  name:'', price: 0, rating: 0, category: { id: 0, name: ''}, user: {id: 0, email: '', password: '', firstname: '', lastname: ''}}
    ])

    const fetchProducts = async () => {
        const result = await axios.get('http://localhost:8080/api/v1/products')
        setProductState(result.data)
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <div>
            <ProductTable productList={productState}></ProductTable>
        </div>
    )
}

export default Product;


