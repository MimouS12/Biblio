import React, { memo  } from "react";
import {
  Form,
  Input,
  Button,
  DatePicker
} from 'antd';
import "./Inscription.css";
import FormItem from "antd/lib/form/FormItem";




function Inscription() {


  const [form] = Form.useForm();
//adheya el fonction onFinish kif testi l'inscription t7el el console melouta ba3d mat3abi les champs lkol
//tenzel 3al button yraja3lek fl console les valeurs saisies yaa3ni values lhne tmathel les valeurs ta3 el formulaire
//kima eli mawjouda fl login 

  const onFinish = fieldsValue  => {
    const values = {
      ...fieldsValue,
      'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
    };

    console.log('Received values of form: ', values );
  };

  return (
    <div className="inscription-page">
     
     <h1> Inscription page </h1> 
     if you are already member just <b>register </b> or  <b><a href="/login">Login now!</a></b> 

     <br/><br/>

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
      <Form.Item name="date-picker" label="Date de naissance :" allowClear >
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
   

    </div>
  )
}
export default memo(Inscription)