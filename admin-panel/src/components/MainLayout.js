import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { VscDashboard } from 'react-icons/vsc';
import { BiUserCircle, BiListUl, BiCategoryAlt } from 'react-icons/bi';
import { AiOutlineRead, AiFillQuestionCircle } from 'react-icons/ai';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { SiBrandfolder } from 'react-icons/si';
import { CgColorPicker } from 'react-icons/cg';
import { HiOutlineNewspaper } from 'react-icons/hi';
import { FaBloggerB } from 'react-icons/fa';
import { TfiWrite } from 'react-icons/tfi';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='logo'>
          <h2 className='text-white fs-5 text-center py-3 mb-0'>
            <span className='sm-logo'>RS</span>
            <span className='lg-logo'>React Shop</span>
          </h2>
        </div>
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['']}
          onClick={({ key }) => {
            if (key == 'signout') {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: '',
              icon: <VscDashboard className='fs-4' />,
              label: 'Dashboard',
            },
            {
              key: 'customers',
              icon: <BiUserCircle className='fs-4' />,
              label: 'Customers',
            },
            {
              key: 'catalog',
              icon: <AiOutlineRead className='fs-4' />,
              label: 'Catalog',
              children: [
                {
                  key: 'add product',
                  icon: <MdOutlineAddShoppingCart className='fs-4' />,
                  label: 'Add Product',
                },
                {
                  key: 'product-list',
                  icon: <BiListUl className='fs-4' />,
                  label: 'Product List',
                },
                {
                  key: 'brand',
                  icon: <SiBrandfolder className='fs-4' />,
                  label: 'Add Brand',
                },
                {
                  key: 'brand-list',
                  icon: <BiListUl className='fs-4' />,
                  label: 'Brand List',
                },
                {
                  key: 'category',
                  icon: <BiCategoryAlt className='fs-4' />,
                  label: 'Add Category',
                },
                {
                  key: 'category-list',
                  icon: <BiListUl className='fs-4' />,
                  label: 'Category List',
                },
                {
                  key: 'color',
                  icon: <CgColorPicker className='fs-4' />,
                  label: 'Add Color',
                },
                {
                  key: 'color-list',
                  icon: <BiListUl className='fs-4' />,
                  label: 'Color List',
                },
              ],
            },
            {
              key: 'orders',
              icon: <HiOutlineNewspaper className='fs-4' />,
              label: 'Orders',
            },
            {
              key: 'blog',
              icon: <FaBloggerB className='fs-4' />,
              label: 'Blogs',
              children: [
                {
                  key: 'blog',
                  icon: <TfiWrite className='fs-4' />,
                  label: 'Add Blog',
                },
                {
                  key: 'blog-list',
                  icon: <BiListUl className='fs-4' />,
                  label: 'Blog List',
                },
                {
                  key: 'blog-category',
                  icon: <BiCategoryAlt className='fs-4' />,
                  label: 'Add Blog Category',
                },
                {
                  key: 'blog-category-list',
                  icon: <BiListUl className='fs-4' />,
                  label: 'Blog Category List',
                },
              ],
            },
            {
              key: 'enquiries',
              icon: <AiFillQuestionCircle className='fs-4' />,
              label: 'Enquiries',
            },
          ]}
        />
      </Sider>
      <Layout className='site-layout'>
        <Header
          style={{
            padding: 0,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
