import axios from 'axios';
import { useState, useEffect } from 'react'
import NewProduct from './NewProduct';
import Product from './Product';

const Dashboard = () => {

    const [productState, setProductState] = useState([
        { id: 1, name: "mac", price: 1000 },
        { id: 2, name: "dell", price: 1100 }
    ]);

    const [newProductState, setNewProductState] = useState({ name: '', price: 0 });

    const fetchProducts = async () => {
        const result = await axios.get("http://localhost:8080/api/v1/products");
        console.log(result.data);
        setProductState(result.data);
    }

    useEffect(() => {
        fetchProducts();

    }, []);

    const handleFieldChange = (e) => {
        let copy = { ...newProductState };
        copy[e.target.name] = e.target.value;
        setNewProductState(copy);
    }

    const handleProductSave = async () => {
        const result = await axios.post("http://localhost:8080/api/v1/products", newProductState);
    }

    const handleDeleteClick = async(id) => {
        const result = await axios.delete(`http://localhost:8080/api/v1/products/${id}`);

    }

    return (
        <>
            <div>Dashboard</div>


            <NewProduct
                handleFieldChange={handleFieldChange}
                handleProductSave={handleProductSave}
            ></NewProduct>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {productState.map(item => {
                        return (
                            <Product
                                name={item.name}
                                price={item.price}
                                id={item.id}
                                handleDeleteClick={handleDeleteClick}
                                key={item.id}
                            ></Product>
                        )
                    })}
                </tbody>

            </table>




        </>

    )
}

export default Dashboard