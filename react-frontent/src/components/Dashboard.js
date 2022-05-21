import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import './dashboard.css';
import axios from 'axios';

import Product from "./Product";
import User from "./User";
import Category from "./Category";
import Review from "./Review";
import Address from "./Address";
import { Link } from 'react-router-dom';


const { Header, Content, Footer } = Layout;



function Dashboard() {


    return (
       <>
            <div className="site-layout-content">
                <h1>Products List</h1>
                <Product></Product>
                <br/>
                <br/>
                <h1>Users List</h1>
                <User></User>
                <br/>
                <br/>
                <h1>Categories List</h1>
                <Category></Category>
                <br/>
                <br/>
                <h1>Reviews List</h1>
                <Review></Review>
                <br/>
                <br/>
                <h1>Address List</h1>
                <Address></Address>
            </div>
       
        </>
    )
}

export default Dashboard;