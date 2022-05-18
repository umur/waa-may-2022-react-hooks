import axios from "axios";
import { useEffect, useState } from "react";
import NewProduct from "./NewProduct";
import Product from "./Product";
import ProductDetail from "./ProductDtl";

const Dashboard = () => {
    const [product, setProduct] = useState([
        { id: 1, name: "laptop", price: 800 },
        { id: 2, name: "phone", price: 200 },
    ]);

    const fetchProducts = async () => {
        const res = await axios.get("http://localhost:8080/api/v1/products");
        setProduct(res.data);
    };

    useEffect(() =>{
        fetchProducts();
    },[]);

    const [newProduct, setNewProduct] = useState({name: "", price: 0});
    const handleProductChange = (e) => {
        let copy = {...newProduct};
        copy[e.target.name] = e.target.value;
        setNewProduct(copy);
    } 
    const handleProductSave = async () => {
        const res = await axios.post("http://localhost:8080/api/v1/products");
    }

    const [selectedProduct, setSelectedProductState] = useState(0);

    const fetchProductsById = async (id) => {
        const res = await axios.get(`http://localhost:8080/api/v1/products/` + id);
        setSelectedProductState(res.data)
    }

    const divClicked = (id) => {
        fetchProductsById(id);
        setSelectedProductState(id);
    }
    

return (
    <>
    <div>My Dashboard</div>
    <div>
    {
        product.map(
            item => {
                return (
                    <div onClick={() => { divClicked(item.id) }}>
                        <Product
                            key={item.id}
                            name={item.name}
                            price={item.price}
                        ></Product>
                    </div>
                )
            }
        )


    }
    </div>
<div>
<NewProduct
        handleProductChange = {handleProductChange}
        handleProductSave ={handleProductSave}
    ></NewProduct>
</div>
    

    <div>
        <p> Product Info </p>
        {product.map(item =>{
            return(
                <Product
                key = {item.id}
                name = {item.name}
                price = {item.price}
                ></Product>
            )
        })}
        
    </div>

    <div>
        <ProductDetail  
            selectedId={selectedProduct}
        >
        </ProductDetail>

    </div>
    </>
    
    );
}

export default Dashboard;