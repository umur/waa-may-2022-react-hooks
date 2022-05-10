import React from 'react'

const Product = (props) => {
    return (

        <>
        <tr>
            <td>{props.name}</td>
            <td>{props.price}</td>
            <td>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => props.handleDeleteClick(props.id)}
                > Delete </button>
                <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => props.handleUpdateClick(props.id)}
                    data-toggle="modal" 
                    data-target="#productUpdateModal"
                > Update </button>
            </td>
        </tr>
        </>

    )
}

export default Product