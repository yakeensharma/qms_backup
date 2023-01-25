import { Card, Space ,Select, Divider, Table} from 'antd';
import { Button ,Form, Input, Radio} from 'antd';
import { UserOutlined, AccountBookOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import '../index2.css'
const { Option } = Select;

const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',


    },
    {
      title: 'Form Type',
      dataIndex: 'form_type',
      key: 'form_type',
    },

    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },

    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
      width: '150px',
      render: (text, record) =>
      (
        <>
       <UserOutlined /> 
       <span style={{marginTop:'8px'}}>{record.department}
       </span>  </>   )
    },
    {
      title: 'View/Edit Form',
      dataIndex: 'viewEditForm',
      key: 'viewEditForm',
      render: (text, record) =>
      (
        <Button type="primary" style = {{backgroundColor:"#385499"}} onClick={() => { window.open("http://localhost:3000/hrEdit", "_self"); }}>View/Edit</Button>
      )
    },
  ];
const Hrplat1 = () => {
    const [department,setDepartment] = useState("Department 1")
    const [formType,setFormType] = useState("Manpower Requisition Form")
    const [count,setCount] = useState(3)
    const [data, setData] = useState([{
        id: 1,
        department: 'Department 1',
        date: '2023-01-09 13:04:13',
        form_type: 'Manpower Requistion Form',
    
      },
      {
        id: 2,
        department: 'Department 2',
        date: '2023-01-09 13:04:13',
        form_type: 'Manpower Requistion Form',
    
      },
      {
        id: 3,
        department: 'Department 2',
        date: '2023-01-09 13:04:13',
        form_type: 'Manpower Requistion Form',
    
      },
    ])
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');
    const onFormLayoutChange = ({ layout }) => {
      setFormLayout(layout);
    };
    const formItemLayout =
      formLayout === 'horizontal'
        ? {
            labelCol: {
              span: 4,
            },
            wrapperCol: {
              span: 14,
            },
          }
        : null;
    const buttonItemLayout =
      formLayout === 'horizontal'
        ? {
            wrapperCol: {
              span: 14,
              offset: 4,
            },
          }
        : null;
    return(
        <>
  <Space
    direction="vertical"
    size="middle"
    style={{
      display: 'flex',
    }}
  >
    <Card title="Requisition Form" size="small">
    <Form
      {...formItemLayout}
      layout={formLayout}
      form={form}
      initialValues={{
        layout: formLayout,
      }}
      onValuesChange={onFormLayoutChange}
      style={{
        maxWidth: 600,
      }}
    >
    
      <Form.Item label="Form Type">
       <div style = {{display:'flex'}}>
      <Select
          placeholder="Select requisition form type"
          onChange={(value)=>{setFormType(value)}}
          allowClear
        >
          <Option value="Manpower Requisition Form">Manpower Requisition Form</Option>
         
        </Select>
        <span style = {{marginTop:'6px',marginLeft:'10px'}}>Department:</span>
        <Select style = {{marginLeft:'10px'}}
          placeholder="Select department"
          onChange={(value)=>{setDepartment(value)}}
          allowClear
        >
          <Option value="department 1">Department 1</Option>
          <Option value="department 2">Department 2</Option>
        </Select>
        <Button type="primary" style = {{marginLeft:'10px'}} onClick={()=>{
          let d = new Date,
          dformat = [d.getMonth()+1,
                     d.getDate(),
                     d.getFullYear()].join('/')+' '+
                    [d.getHours(),
                     d.getMinutes(),
                     d.getSeconds()].join(':');
 setData([...data, {
            id: count + 1,
            department: department,
            form_type:formType,
            date: dformat,

          }])
          setCount(count + 1)
        }}>Create</Button>
        </div> 
      
 
       
      </Form.Item>
    </Form>
   
    </Card>

  </Space>
  <Divider orientation="left">Recent Forms</Divider>

  <Table
        style={{ marginTop: "30px" }}
        dataSource={data}
        columns={columns}

      />
  </>
  )
};
export default Hrplat1;