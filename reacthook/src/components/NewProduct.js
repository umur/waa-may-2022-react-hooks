const NewProduct = (props) => {
    
    return(
        <div>
            <input type="text" name ="name" onChange={props.hhandleProductChange} />
            <input type="number" name ="price" onChange={props.hhandleProductChange} />
            <input type="button" value="Save" onChange={props.handleProductSave} />
        </div>
    )
}

export default NewProduct;