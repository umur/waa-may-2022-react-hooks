import { Table, Tag, Space } from 'antd';
import 'antd/dist/antd.css';

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
    },
    {
      title: 'Category',
      key: 'category',
      dataIndex: 'category',
      render: category =>   <span>{category.name}</span>
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>Update</a>
          <a>Delete</a>
        </Space>
      ),
    },
];


export default (props) => <Table columns={columns} dataSource={props.productList} rowKey='id' />;

  
