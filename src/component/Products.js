import Product from "./Product"


const Products = (props) => {

    

    return (
        <>
            {
                props.products.map( product => {
                    return <Product key={product.id} product={product} onDelete = {props.onDelete}></Product>
                })
            }
        </>
    )
}

export default Products