import React ,{useState ,useEffect} from "react"
import { NavLink, useRouteMatch ,Redirect } from "react-router-dom"
//Link, 
import { Menu} from 'antd';
import {
  
  BarsOutlined,
  HomeOutlined,
  LogoutOutlined,
  UserOutlined
} from '@ant-design/icons';
import './AdherentMenu.css'


function AdherentMenu() {

  const[memberConnected,setMemberConnected]=useState(true)

    let { path } = useRouteMatch()
    var userAd = JSON.parse(localStorage.getItem('user'))
    if (userAd){
      var id = userAd["id"]
      var nom = userAd["nom"]+" "+userAd["prenom"]
    }

    useEffect(()=>{
      if(userAd===null){
        setMemberConnected(false)
      }
    },[userAd])
    
    const logout =() =>{
      alert("you will log out")
      localStorage.removeItem('user');
      setMemberConnected(false)

    }

    return (
    <div>    
            {!memberConnected &&( <Redirect to="/login" /> )}
  
              <Menu  defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="horizontal" className="ant-menuMem">
              <Menu.Item key="1" icon={<HomeOutlined style={{ fontSize: '18px' }}/>} className="ant-menu-itemMem">
                
               <NavLink to={`${path}/home`}  activeStyle={{ color: "brown"}} style={{color: 'black'}}><b>Accueil</b> </NavLink>
      
              </Menu.Item>
              <Menu.Item key="2" icon={<BarsOutlined style={{ fontSize: '18px' }}/>} className="ant-menu-itemMem">
                 <NavLink to={`${path}/listelivres`}  activeStyle={{ color: "brown"}} style={{color: 'black'}}>
                   <b>Livres</b> </NavLink>
              </Menu.Item>
              <Menu.Item key="3" icon={<UserOutlined style={{ fontSize: '18px' }} />} className="ant-menu-itemMem">
        <NavLink to={`${path}/${id}`}  activeStyle={{ color: "brown"}} style={{color: 'black'}}><b>{nom}</b> </NavLink>
              </Menu.Item>
              <Menu.Item key="4" icon={<BarsOutlined style={{ fontSize: '18px' }} />} className="ant-menu-itemMem">
        <NavLink to={`${path}/emprunts/${id}`}  activeStyle={{ color: "brown"}} style={{color: 'black'}}><b>Emprunts</b> </NavLink>
              </Menu.Item>
        
      {/* //partie dropdown
              <SubMenu key="sub1" icon={<SettingOutlined />} title="Navigation Three - Submenu">
                <Menu.ItemGroup title="Item 1">
                  <Menu.Item key="4">Option 1</Menu.Item>
                  <Menu.Item key="5">Option 2</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu> */}
              
              <Menu.Item key="5" icon={<LogoutOutlined style={{ fontSize: '18px' }} />} className="ant-menu-itemMem" onClick={logout}>
              
              <b >Déconnexion</b> 
              </Menu.Item>
      
      
      
      
            </Menu>





</div>


  

  )
}

export default AdherentMenu