// import logo from './logo.svg';
// import './App.css';

// import React from 'react';
// import Dashboard from './component/dashboard';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Register from './component/register';
// import Login from './component/login';
// import NoPage from './component/no_page';
// import Product from './component/product';
// import Navigation from './component/nav';


// function App() {
//   return (
//     <BrowserRouter>
//     <div className="App">
//       <Navigation></Navigation>
    
//       <Routes>
//         <Route exact path = "/" element={<Product/>}/>
//         <Route exact path = "/products" element={<Product/>}/>
//         <Route exact path = "/signup" element={<Register/>}/>
//         <Route exact path = "/login" element={<Login/>}/>
//         <Route path="*" element={<NoPage />} />
//       </Routes>
//       </div>
//   </BrowserRouter>

//   );
// }

// export default App;




import { useEffect, useState } from "react"
import AddProduct from "./component/AddProduct.js";
import Products from "./component/Products";
import Header from "./component/Header";
import axios from "axios";
import { BrowserRouter, Routes , Route} from "react-router-dom";
import Login from "./component/login.js";
import Register from "./component/Register.js";

function App() {
  const[products, setProducts] = useState(
    [
        {
            id: 1,
            name:'Iphone',
            price: 1000
        },
        {
            id: 2,
            name:'Computer',
            price: 2000
        },
        {
            id: 3,
            name:'Mac',
            price: 3000
        }
    ]

)

useEffect(() => {
  const getProducts = async () => {
    await fetchProducts()
  }

  getProducts()
}, [])

// Fetch Tasks
const fetchProducts = async () => {
  
       axios.get('http://localhost:8080/api/v1/products')
        .then(result => {
            console.log(result.data);
            setProducts(result.data)
        })

}


//On add task
const addProduct = async (product) => {
  // const id = Math.floor(Math.random()*10000) + 4;
  // const newProduct = {id, ...product}
  await axios.post('http://localhost:8080/api/v1/products', product);
  fetchProducts();

}

//On delete Product
const deleteProduct = async (id) => {
  await axios.delete('http://localhost:8080/api/v1/products/'+id);
  console.log(id);
  fetchProducts();
  //setProducts(products.filter(product => product.id !== id))
  /**
   * const res = await fetch(`http://localhost:8080/api/v1/products/${id}`, {
      method: 'DELETE',
    })
    //We should control the response status to decide if we will change the state or not.
    res.status === 200
      ? setProducts(products.filter((task) => task.id !== id))
      : alert('Error Deleting This Task')
   */
}

  return (
    <div className="container">
      <BrowserRouter>
      <Header/>
      
      <Routes>

        <Route path="/" element = {<Products products ={products} onDelete ={deleteProduct}/>} ></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Register/>}></Route>
        <Route path="/add-product" element={<AddProduct onAdd = {addProduct}/> }> </Route>
       <Route path="/products" element = {<Products products ={products} onDelete ={deleteProduct}/>} ></Route>


      {/* <AddProduct onAdd = {addProduct}/>
       {products.length > 0 ? <Products products ={products} onDelete ={deleteProduct}></Products> : "No Tasks To Show" }
       */}

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

