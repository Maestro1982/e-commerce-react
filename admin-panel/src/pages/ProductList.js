import React from 'react';
import { Table } from 'antd';
import { BiEdit } from 'react-icons/bi';
import { RiDeleteBin5Fill } from 'react-icons/ri';

const columns = [
  {
    title: 'SNo',
    dataIndex: 'key',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Product',
    dataIndex: 'product',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
];
const dataTable = [];
for (let i = 1; i < 46; i++) {
  dataTable.push({
    key: i,
    name: `Edward King ${i}`,
    product: 32,
    status: `London, Park Lane no. ${i}`,
  });
}

const ProductList = () => {
  return (
    <div>
      <h3 className='mb-4 title'>Products</h3>
      <div>
        <Table columns={columns} dataSource={dataTable} />
      </div>
    </div>
  );
};

export default ProductList;
