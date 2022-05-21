
import { Route, Routes } from 'react-router';
import Product from "./components/Product";
import User from "./components/User";
import Category from "./components/Category";
import Review from "./components/Review";
import Address from "./components/Address";
import './App.css';
import Dashboard from './components/Dashboard';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';


const { Header, Content, Footer } = Layout;
function App() {
  return (
    <div>

      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal">
            <Menu.Item key="home">
              <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item key="product">
              <Link to='/products'>Products</Link>
            </Menu.Item>
            <Menu.Item key="users">
              <Link to='/users'>Users</Link>
            </Menu.Item>
            <Menu.Item key="categories">
              <Link to='/categories'>Categories</Link>
            </Menu.Item>
            <Menu.Item key="reviews">
              <Link to='/reviews'>Review</Link>
            </Menu.Item>
            <Menu.Item key="address">
              <Link to='/address'>Address</Link>
            </Menu.Item>
          </Menu>
        </Header>


        <Content style={{ padding: '0 50px' }}>

          <Routes>
            <Route path='/' element={<Dashboard></Dashboard>}></Route>
            <Route path='/products' element={<Product></Product>}></Route>
            <Route path='/users' element={<User></User>}></Route>
            <Route path='/categories' element={<Category></Category>}></Route>
            <Route path='/reviews' element={<Review></Review>}></Route>
            <Route path='/address' element={<Address></Address>}></Route>
          </Routes>

        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>


    </div>
  );
}

export default App;
