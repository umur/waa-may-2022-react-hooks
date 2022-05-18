import axios from "axios";
import { useEffect, useState } from "react"

const ProductDtl = (props) => {
    const [productDetails, productDetailsState] = useState({id:2, name: '', price: 0 });
const fetchProducts = async () => {
    const res = await axios.get(`http://localhost:8080/api/v1/products/`+props.selectedId);
    productDetailsState(res.data);
}

useEffect(() => {
    fetchProducts();
},[props.selectedId])

    return (
        <div className="App">
            <div> Product Detail</div>
            <div>
                <div>
                    <p>
                        Name : {productDetails.name}
                        Price:  {productDetails.price}
                    </p>
                </div>
            </div>
        </div>

    )
}

export default ProductDtl; 