import React,{useState , useEffect} from "react"
import { Redirect , NavLink, useRouteMatch} from "react-router-dom"
import {  Menu } from 'antd';
import {
  
  BarsOutlined,
  HomeOutlined,
  LogoutOutlined,
  UsergroupAddOutlined,
  TeamOutlined,
  ScheduleOutlined
} from '@ant-design/icons';
//import { LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

import './BibliothecaireMenu.css'
function BibliothecaireMenu({children}) { 

  const[connected,setConnected]=useState(true)

   let { path } = useRouteMatch()
   var user =localStorage.getItem('user')

   useEffect(()=>{
     if(user===null){
      setConnected(false)
     }
   },[user])
    
    const logout =() =>{
      alert("you will log out")
      localStorage.removeItem('user');
      setConnected(false)
    }
        

        
  return (

      
            <div>   

      <Menu  defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="horizontal" className="ant-menuAd">
        <Menu.Item key="1" icon={<HomeOutlined style={{ fontSize: '20px' }}/>} className="ant-menu-itemAd">
          
         <NavLink to={`${path}/home`}  activeStyle={{ color: "brown"}} style={{color: 'black'}}><b>Accueil</b> </NavLink>

        </Menu.Item>
        <Menu.Item key="2" icon={<BarsOutlined style={{ fontSize: '20px' }}/>} className="ant-menu-itemAd">
           <NavLink to={`${path}/listelivres`}  activeStyle={{ color: "brown"}} style={{color: 'black'}}>
             <b>Livres</b> </NavLink>
        </Menu.Item>
        <Menu.Item key="3" icon={<TeamOutlined  style={{ fontSize: '20px' }}/>} className="ant-menu-itemAd">
           <NavLink to={`${path}/ListeAdherents`}  activeStyle={{ color: "brown"}} style={{color: 'black'}}>
             <b>Adherents</b> </NavLink>
        </Menu.Item>
        <Menu.Item key="4" icon={<UsergroupAddOutlined style={{ fontSize: '20px' }}/>} className="ant-menu-itemAd">
           <NavLink to={`${path}/demandes`}  activeStyle={{ color: "brown"}} style={{color: 'black'}}>
             <b>Demandes</b> </NavLink>
        </Menu.Item>
        <Menu.Item key="5" icon={<ScheduleOutlined  style={{ fontSize: '20px' }}/>} className="ant-menu-itemAd">
           <NavLink to={`${path}/listeEmprunts`}  activeStyle={{ color: "brown"}} style={{color: 'black'}}>
             <b>Emprunts</b> </NavLink>
        </Menu.Item>
 

        {/* <SubMenu key="sub1" icon={<SettingOutlined />} title="Navigation Three - Submenu">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="4">Option 1</Menu.Item>
            <Menu.Item key="5">Option 2</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
         */}
        <Menu.Item key="6" icon={<LogoutOutlined style={{ fontSize: '20px' }} />} className="ant-menu-itemAd" onClick={logout}>
        
        <b>Déconnexion</b> 
        </Menu.Item>




      </Menu>
      {!connected &&(
                   <Redirect to="/login" />
                  )} 
      
              {/* <Layout className="site-layout-background" style={{ margin: '20px 20px ' }}>
              <Sider className="site-layout-background">
          <Menu className="menu"
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
         <Menu.Item key="1"> <NavLink
          to={`${path}/demandes`}
          activeClassName="active">Demandes</NavLink></Menu.Item>
         <Menu.Item key="2"> <NavLink
          to={`${path}/listeEmprunts`}
          activeClassName="active"> Emprunts </NavLink></Menu.Item>
       
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="Livres">
              <Menu.Item key="5">Ajouter livre</Menu.Item>
              <Menu.Item key="6">Liste livres</Menu.Item>
            </SubMenu>
            <SubMenu key="sub1" icon={<NotificationOutlined />} title="Adhérents">
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
                
              </Layout> */}
       
    


</div>
            
            
          
        
   
    
  )
        
      

}


export default BibliothecaireMenu