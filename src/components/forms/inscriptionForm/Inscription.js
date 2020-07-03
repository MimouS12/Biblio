import React, { memo ,useState } from "react";
import {
  Form,
  Input,
  Button,
  DatePicker
} from 'antd';

import { Alert } from 'antd';
import{DemanderInscription}from "../../../services/demandes.service"
import "./Inscription.css";
import FormItem from "antd/lib/form/FormItem";




function Inscription() {


  const[inscrit,setinscrit]=useState(false)
  const [form] = Form.useForm();

  const onFinish = fieldsValue  => {
    const values = {
    nom :fieldsValue["nom"],
    prenom:fieldsValue["prenom"],
    email : fieldsValue["email"],
    cin :fieldsValue["cin"],
    'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
    };   
    setinscrit(true)
    console.log('Received values of form: ', values );
    DemanderInscription(values)
        
  };

  return (
    <div className="inscription-page">
                <h1> Inscription page </h1> 
    if you are already member just <b>register </b> or  <b><a href="/login">Login now!</a></b> 

    <br/><br/>
      {inscrit &&(
                  <Alert
                  message="Merci pour votre inscription !"
                  description="Votre demande d'adhésion a été enregistré avec succès, elle sera examinée dans les meilleurs délais !"
                  type="success"
                  showIcon
                />
      )}
     {!inscrit &&(
       
     <Form
     form={form}
     name="register"
     onFinish={onFinish}
     
   >

     <div className="inlineInputs">
     <FormItem
     name="nom"
     label="Nom"
     rules={[
       {
         required: true,
         message: 'Please input your Family name',
       },
     ]}
     >
       <Input />
  
     </FormItem>
     <FormItem
     name="prenom"
     label="Prénom"
     rules={[
       {
         required: true,
         message: 'Please input your name',
       },
     ]}
     >
       <Input/>
  
     </FormItem>
     </div>
     <Form.Item
       name="email"
       label="E-mail"
       rules={[
         {
           type: 'email',
           message: 'The input is not valid E-mail!',
         },
         {
           required: true,
           message: 'Please input your E-mail!',
         },
       ]}
     >
       <Input />
     </Form.Item>
     <div className="inlineInputs">
       <FormItem name="cin" label="CIN :" 
          rules={[
           
           {
             required: true,
             message: 'Please input your cin',
           },
         ]}
       >
       <Input maxLength="8"/>

     </FormItem>
     <Form.Item name="date-picker" label="Date de naissance :"  >
      <DatePicker />
     </Form.Item>  
     </div>
     <div>(!) your membership request will be examined as soon as possible</div>
     <br/>
     <Form.Item >
       <Button type="primary" htmlType="submit">
         S'inscrire
       </Button>
       
     </Form.Item>
   </Form>
  

     )}



    </div>
  )
}
export default memo(Inscription)