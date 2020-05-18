import React , {  } from "react";
import {  NavLink } from "react-router-dom";
import { Menu } from 'antd';
import './MenuForm.css';

function MenuForm()  {

 
 
  return (
      <div className="menuform">
         <Menu mode="horizontal"  >
        
        <Menu.Item key="login" title="login" >
            <NavLink to="/login" >
             Login
             </NavLink>
        </Menu.Item>
        <Menu.Item key="inscrit" title="inscription" >
            <NavLink to="/inscrit" >
                Inscription
                </NavLink>
        </Menu.Item>
        
        </Menu>
        
   
    
    </div>
  )
}
export default MenuForm ;
