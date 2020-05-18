import React from "react"
import {  NavLink, useRouteMatch} from "react-router-dom"
import { Layout, Menu, } from 'antd';
import { LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

import './BibliothecaireMenu.css'
function BibliothecaireMenu({children}) {
  
    let { path } = useRouteMatch()
    const { SubMenu } = Menu;
        const { Header, Content, Sider } = Layout;
        

        
  return (
    
  /*   <ul>
      <li>
        <NavLink
          to={`${path}/hello`}
          activeClassName="active"
          isActive={(_, { pathname }) =>
            pathname.match("/hello") || pathname === "/"
          }
        >
          Home
        </NavLink>
        {/* <Link to="/hello">Home</Link> }*/
      /*</li>
      <li>
        <NavLink to={`${path}/tasks`} activeClassName="active">
          My tasks
        </NavLink>
        {/* <Link to="/tasks"> My tasks</Link> }*/
       
        
        
 
        
        
          <Layout>
            <Header className="header">
              <div className="logo" />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1"> <NavLink
          to={`${path}/`}
          activeClassName="active"
          isActive={(_, { pathname }) =>
            pathname.match("/") || pathname === "/"
          }
        >Accueil </NavLink></Menu.Item>
                <Menu.Item key="2"><NavLink
          to={`${path}/`}
          activeClassName="active"
          isActive={(_, { pathname }) =>
            pathname.match("/") || pathname === "/"
          }
        > Livres</NavLink></Menu.Item>
                <Menu.Item key="3"><NavLink
          to={`${path}/`}
          activeClassName="active"
          isActive={(_, { pathname }) =>
            pathname.match("/") || pathname === "/"
          }
        >Emprunt </NavLink></Menu.Item>
        <Menu.Item key="1"> <NavLink
          to={`${path}/ListeAdherents`}
          activeClassName="active"
          isActive={(_, { pathname }) =>
            pathname.match("/ListeAdherents") || pathname === "/"
          }
        >Adherents </NavLink></Menu.Item>
        <Menu.Item key="1"> <NavLink
          to={`${path}/login`}
          activeClassName="active"
          isActive={(_, { pathname }) =>
            pathname.match("/") || pathname === "/"
          }
        >Log out </NavLink></Menu.Item>
        
              </Menu>
            </Header>
            <Content >
            
            
          
              <Layout className="site-layout-background" style={{ margin: '20px 20px ' }}>
              <Sider className="site-layout-background">
          <Menu className="menu"
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >Tableau de bord
         <Menu.Item key="1"> <NavLink
          to={`${path}/hello`}
          activeClassName="active"
          isActive={(_, { pathname }) =>
            pathname.match("/hello") || pathname === "/"
          }
        >Demandes</NavLink></Menu.Item>
         <Menu.Item key="1"> <NavLink
          to={`${path}/hello`}
          activeClassName="active"
          isActive={(_, { pathname }) =>
            pathname.match("/hello") || pathname === "/"
          }
        >Emprunt </NavLink></Menu.Item>
       
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="Livres">
              <Menu.Item key="5">Ajouter livre</Menu.Item>
              <Menu.Item key="6">Liste livres</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<NotificationOutlined />} title="Adhérents">
              <Menu.Item key="9"> <NavLink
          to={`${path}/ListeAdherents`}
          activeClassName="active"
          isActive={(_, { pathname }) =>
            pathname.match("/ListeAdherents") 
          }
        >Adherents actives</NavLink></Menu.Item>
              <Menu.Item key="10">Adherents Bannis</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
                <Content classname="content">maryem</Content>
              </Layout>
            </Content>
            
          </Layout>
    
        
   
    
  )
        
      

}


export default BibliothecaireMenu