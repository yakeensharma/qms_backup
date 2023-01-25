import { Card, Space ,Select, Divider, Table, DatePicker} from 'antd';
import { Button ,Form, Input,InputNumber, Radio} from 'antd';
import { UserOutlined, AccountBookOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import '../index2.css'
const { Option } = Select;
const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  
  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },}
    const onFinish = (values) => {
        console.log(values);
      };
const HrForm = () => {
    

    const [data, setData] = useState([{
        id: 1,
        department: 'Department 1',
        date: '',
        form_type: 'Manpower Requistion Form',
    
      },
      {
        id: 2,
        department: 'Department 2',
        date: '',
        form_type: 'Manpower Requistion Form',
    
      },
      {
        id: 3,
        department: 'Department 2',
        date: '',
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
    <Card title="Manpower Requisition Form" size="large">
     <h6>Instructions/Hiring Information
Use this form to initiate the recruitment process for all new and existing staff. Please complete
all applicable sections of this form. Contact [Name of Contact Person or HR Director] if you
need any assistance. </h6>
<h6 style={{fontWeight:'bold'}}>
NO OFFERS should be made, either verbally or in written form, before
all approvals on the form are completed.
</h6>
   
    </Card>

  </Space>
  <Divider orientation="left"></Divider>

  <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{
      maxWidth: 600,
    }}
    validateMessages={validateMessages}
  >
    <Form.Item
      name={['user', 'name1']}
      label="Department"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={['user', 'email2']}
      label="Date Requested"
    
    >
       <DatePicker onChange={()=>{}} />
    </Form.Item>
    <Form.Item
      name={['user', 'email3']}
      label="Date Required"
    
    >
       <DatePicker onChange={()=>{}} />
    </Form.Item>
    <Form.Item
      name={['user', 'name4']}
      label="Position Requested"
      rules={[
        {
          required: true,
        },
      ]}
    >
         <Select 
          placeholder="Select Position"
          onChange={()=>{}}
          allowClear
        >
          <Option value="op1">Full Time</Option>
          <Option value="op2">Part Time</Option>
          <Option value="op3">Temporary</Option>
          <Option value="op4">Other</Option>
        </Select>
    
    </Form.Item>
    <Form.Item
      name={['user', 'name5']}
      label="Employment Type"
      rules={[
        {
          required: true,
        },
      ]}
    >
         <Select 
          placeholder="Select Employmnet Type"
          onChange={()=>{}}
          allowClear
        >
          <Option value="op12">Student Trainee</Option>
          <Option value="op22">Contractual</Option>
          <Option value="op32">Regular</Option>
          <Option value="op42">Other</Option>
        </Select>
    
    </Form.Item>
    <Form.Item
      name={['user', 'name88']}
      label="Position Status"
      rules={[
        {
          required: true,
        },
      ]}
    >
         <Select 
          placeholder="Select Position Status"
          onChange={()=>{}}
          allowClear
        >
          <Option value="op12">New Position</Option>
          <Option value="op22">Replacement</Option>
          <Option value="op32">Reorganization</Option>
          <Option value="op42">Internal Candidates</Option>
          <Option value="op442">External Candidates</Option>
          <Option value="op462">Internal & External Candidates</Option>
        </Select>
        
    </Form.Item>
    <Divider orientation="center" ></Divider>
 
    <Form.Item name={['user', 'website1']} label="Job Description">
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'introduction2']} label="Title">
      <Input />
    </Form.Item>
    
    <Form.Item name={['user', 'website12']} label="Experience">
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'introduction22']} label="Location">
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'introduction223']} label="Qualification">
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'introduction122333']} label="Role & Responsibilities">
      <Input.TextArea />
    </Form.Item>
    <Form.Item name={['user', 'introduction022333']} label="Technical requirement">
      <Input.TextArea />
    </Form.Item>
    <Form.Item name={['user', 'introduction222333']} label="Personal Traits">
      <Input.TextArea />
    </Form.Item>
    <Form.Item name={['user', 'introduction322333']} label="Justification of new positions">
      <Input.TextArea />
    </Form.Item>
    <Divider orientation="center" ></Divider>
    <h6 style={{fontWeight:'bold'}}>
    Budget Information/Approval
</h6>
<Form.Item name={['user', 'introdudsaction22']} label="Proposed Compensation">
      <Input />
    </Form.Item>
    <Form.Item name={['user', '2introdudsaction22']} label="Manager Submitting Request:">
      <Input />
    </Form.Item>
    <Form.Item name={['user', '2intr21odudsaction22']} label="Phone:">
      <Input />
    </Form.Item>
    <Form.Item name={['user', '2intr21odudsactio43n22']} label="Email:">
      <Input />
    </Form.Item>
    <Form.Item
      name={['user', 'name8438']}
      label="The Request is"
      rules={[
        {
          required: true,
        },
      ]}
    >
         <Select 
          placeholder="Select Request Status"
          onChange={()=>{}}
          allowClear
        >
          <Option value="op122">Approved</Option>
          <Option value="op2242">Not Approved</Option>
      
        </Select>
        </Form.Item>
        <Form.Item name={['user', 'intr5345oductisdon322333']} label="Comments">
      <Input.TextArea />
    </Form.Item>
    <Form.Item name={['user', '2intr21odudsaction22']} label="Date Submitted to HR Manager:">
      <Input />
    </Form.Item>
    <Form.Item
      wrapperCol={{
        ...layout.wrapperCol,
        offset: 8,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>

  </>
  )
};
export default HrForm;