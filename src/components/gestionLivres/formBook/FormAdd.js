import React, { useState,memo,useRef,useEffect } from "react"
import { Button, Modal, Form, Input, Radio } from 'antd';

import './FormAdd.css'
const CollectionCreateForm = ({ visible, onCreate, onCancel  }) => {
    const [form] = Form.useForm();
    
    
   /*  const handleAddBook = () => {
      addBook(libelle,auteur)
      inputlibelle.current.focus()
      setlibelle("learn")
      setauteur("")
    }
    useEffect(() => {
      document.libelle =libelle
      // setTitle("hello"+ Math.random())
    }) */
 
    return (
      <Modal
        visible={visible}
        title="Create a new collection"
        okText="Create"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          
          form
            .validateFields()
            .then(values => {
              form.resetFields();
              onCreate(values);
            })
            
            .catch(info => {
              console.log('Validate Failed:', info);
            });
        }}
      >
        <Form
          form={form}
          layout="vertical"
          name="form_in_modal"
          initialValues={{
            modifier: 'public',
          }}
        >
          <Form.Item
            name="libelle"
            label="libelle"
            rules={[
              {
                required: true,
                message: 'Please input the title of collection!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="auteur" label="auteur">
            <Input type="textarea" />
          </Form.Item>

         
          <Form.Item name="modifier" className="collection-create-form_last-form-item">
            <Radio.Group>
              <Radio value="public">Public</Radio>
              <Radio value="private">Private</Radio>
            </Radio.Group>
          </Form.Item>
        {/*   <Button className="button" onClick={ handleAddBook  }>
        Add a Book
      </Button> */}
        </Form>
      </Modal>
    );
  };
function FormAdd({ titre  ,addBook}) {
    const [visible, setVisible] = useState(false);
/*     const [libelle, setlibelle] = useState("learn")
    const [auteur, setauteur ]= useState(0)
    const inputlibelle = useRef(null)
    const  handleAddBook  = (libelle,auteur) => {
      console.log('Received values of form: ',libelle,auteur);
    
      addBook(libelle,auteur)
      setlibelle("learn")
      setauteur("")
    };
 */
    
    const onCreate = values => {
      console.log('Received values of form: ', values);
      setVisible(false);
    };
   

  return (

<div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
  {titre}      </Button>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
      
   
  )
}
export default memo(FormAdd)
