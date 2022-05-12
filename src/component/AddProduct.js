import { useState } from "react"

const AddProduct = ({onAdd}) => {
    const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!name) {
      alert('Please add a product')
      return
    }

    onAdd({ name, price})

    setName('')
    setPrice('')
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Product</label>
        <input
          type='text'
          placeholder='Add Product'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Price</label>
        <input
          type='text'
          placeholder='Add Price'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
     

      <input type='submit' value='Save Product' className='btn btn-block' />
    </form>
  )
}
export default AddProduct