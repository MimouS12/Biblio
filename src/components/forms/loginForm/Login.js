import React, { memo ,useState } from "react";
// import MenuForm from "../../menu/MenuForm";

import { Form, Input, Button, Checkbox } from 'antd';
import { Alert } from 'antd';

import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {fetchMemberByemailCIN } from '../../../services/adherents.service'
import {
  Redirect
} from "react-router-dom"

import "./Login.css";

function Login() {
  
  const[modeAdmin,setmodeAdmin]=useState(false)
  const[modeMember,setmodeMember]=useState(false)
  const[wrongLogin,setwrongLogin]=useState(false)
  const[etatBanni,setetatBanni]=useState(false)

  //tjib les valeurs username w password eli maktoubin t7othom fi values 
  //yaani tnajjem lel cnx te5ou values t9aren behoum :p 

  const onFinish = async (values) => {

    //ya bibliothécaire 
    if(values['username']==="admin@gmail.com" && values['password']==="INMAadmin"){
      setmodeAdmin(true)
      console.log("connected bibliothécaire admin")
    }else{
          // bech ntestiw 3al adherent lenna 
          const result = await fetchMemberByemailCIN(values['username'], values['password'])

            //ken resultat not true yaani el fonction maraj3tlna chay yaani l fonction 8alta 
            //result traj3elna el adherent lkol yaani najjem naacedi lel les champs nom wala elli nehb aliih 
           //sinn ken mal9achi result ta3ti undefined

           if(!result){
               setmodeMember(false)
               console.log("username ou password false")
               setwrongLogin(true)
           }else{
                if(result["etat"]==="active"){
                  setmodeMember(true)
                  console.log("connected , welcome "+result["nom"])
                }else if(result["etat"]==="banni") {
                  console.log("this member is banni , cannot login")
                  setetatBanni(true)
                 }
            }
        }

  };
  

  return (
    <div className="login-page">
          {etatBanni &&(
              <Alert
              message="Warning"
              description="Adherent banni! tu ne peux pas connecter"
              type="warning"
              showIcon
              closable
            />
         )}
         {wrongLogin &&(
                         <Alert
                         message="Error"
                         description="Username ou password incorrectes. Merci de vérifier à nouveau !"
                         type="error"
                         showIcon
                         closable
                       />


         )}
 
      <h1>Welcome ! </h1>

      if you are already member just <b>login</b> or <b>register now</b> 
      <br/>
      <br/>
     <div className="formLogin">
      <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item  
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <br/>   <br/>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="/inscrit">register now!</a>
      </Form.Item>
    </Form>
    {modeAdmin &&(
      <Redirect to="/AdminMenu" >

<Alert
      message="Success Tips"
      description="Detailed description welcom"
      type="success"
      showIcon
    />
      </Redirect>

    )}
        {modeMember &&(
      <Redirect to="/MemberMenu"  > </Redirect>

    )}

      
    
    </div>
    </div>
    
  )
}
export default memo(Login)
