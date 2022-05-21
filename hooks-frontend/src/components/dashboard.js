import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';



import Product from "./product";
import User from "./user";
import Category from "./category";
import Review from "./review";
import Address from "./address";


const { Header, Content, Footer } = Layout;



function Dashboard() {

   

    return (
       <>           
         <Layout className="layout">
             <Header>
                <div className="logo" />
                 <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={new Array(5).fill(null).map((_, index) => {
                        const key = index + 1;
                        return {
                            key,
                            label: `nav ${key}`,
                        };
                    })}
                />
            </Header>
            <Content style={{ padding: '0 50px' }}>
                              
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
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
        </>
    )
}

export default Dashboard;