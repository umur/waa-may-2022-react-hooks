const NewProduct = (props) => {
    return (
        <div>
            <input
                type="text"
                name='name'
                onChange={props.handleFieldChange}
            />
            <input
                type="text"
                name='price'
                onChange={props.handleFieldChange}
            />
            <input
                type="button"
                value="Product Save"
                onClick={props.handleProductSave}
            />
        </div>
    )
}

export default NewProduct