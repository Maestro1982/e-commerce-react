import React from 'react';
import { HiOutlineTrendingDown, HiOutlineTrendingUp } from 'react-icons/hi';
import { Column } from '@ant-design/plots';
import { Table } from 'antd';

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

const Dashboard = () => {
  const data = [
    {
      type: 'Jan',
      sales: 38,
    },
    {
      type: 'Feb',
      sales: 52,
    },
    {
      type: 'Mar',
      sales: 61,
    },
    {
      type: 'Apr',
      sales: 145,
    },
    {
      type: 'May',
      sales: 48,
    },
    {
      type: 'Jun',
      sales: 38,
    },
    {
      type: 'Jul',
      sales: 38,
    },
    {
      type: 'Aug',
      sales: 38,
    },
    {
      type: 'Sep',
      sales: 38,
    },
    {
      type: 'Okt',
      sales: 38,
    },
    {
      type: 'Nov',
      sales: 38,
    },
    {
      type: 'Dec',
      sales: 38,
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    color: ({ type }) => {
      return '#e55812';
    },
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'Month',
      },
      sales: {
        alias: 'Income',
      },
    },
  };
  return (
    <div>
      <h3 className='mb-4 title'>Dashboard</h3>
      <div className='d-flex justify-content-between align-items-center gap-3'>
        <div className='d-flex justify-content-between align-items-end flex-grow-1  bg-white rounded-3 p-3'>
          <div>
            <p className='subtitle'>Total</p>
            <h4 className='mb-0 amount'>€1100</h4>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <h6>
              <HiOutlineTrendingDown /> 32%
            </h6>
            <p className='mb-0 subtitle'>Compared to November 2022</p>
          </div>
        </div>
        <div className='d-flex justify-content-between align-items-end flex-grow-1  bg-white rounded-3 p-3'>
          <div>
            <p className='subtitle'>Total</p>
            <h4 className='mb-0 amount'>€1100</h4>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <h6 className='arrow-red'>
              <HiOutlineTrendingDown /> 32%
            </h6>
            <p className='mb-0 subtitle'>Compared to November 2022</p>
          </div>
        </div>
        <div className='d-flex justify-content-between align-items-end flex-grow-1  bg-white rounded-3 p-3'>
          <div>
            <p className='subtitle'>Total</p>
            <h4 className='mb-0 amount'>€1100</h4>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <h6 className='arrow-green'>
              <HiOutlineTrendingDown /> 32%
            </h6>
            <p className='mb-0 subtitle'>Compared to November 2022</p>
          </div>
        </div>
      </div>
      <div className='mt-4'>
        <h3 className='mb-5 title'>Income Statics</h3>
        <div>
          <Column {...config} />
        </div>
      </div>
      <div className='mt-4'>
        <h3 className='mb-5 title'>Recent Orders</h3>
        <div>
          <Table columns={columns} dataSource={dataTable} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
