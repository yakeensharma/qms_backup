import { Button, Card, Select, Modal, Table, Input } from 'antd';
import React, { useContext, useState } from 'react';
import { UserOutlined, AccountBookOutlined } from '@ant-design/icons';
import { useEffect } from 'react';


function Forms() {
  const [departmentOptions, setdepartmentOptions] = useState([{ label: "Insurance", value: "insurance" }])
  const [clientOptions, setClientOptions] = useState([{ label: "Reliance Partners", value: "reliance_partners" }])
  const [formOptions, setFormOptions] = useState([{ label: "Loss Runs _Reliance Partners_QMF_COG_QLY_1.0", value: "loss_runs" }])
  const [processOptions, setProcessOptions] = useState([{ label: "Loss Runs", value: "loss_runs" }])
  const [employeeList, setEmployeeList] = useState([{ label: "Test_Emp_1", value: "Test_Emp_1" },{ label: "Test_Emp_2", value: "Test_Emp_2" }])
  const [transactionId, setTransactionId] = useState("")
  const [employeeSelected, setSelectedEmployee] = useState(null)
  const [selectedDepartment, setSelectedDepartment] = useState(null)
  const [selectedValueClient, setSelectedValueClient] = useState(null);
  const [selectedValueOptions, setSelectedValueOptions] = useState(null);
  const [selectedValueForm, setSelectedValueForm] = useState(null);
  const [data, setData] = useState([{
    id: 1,
    department: 'Insurance',
    client: "Reliance Partners",
    process: 'Loss Runs ',
    form: 'Loss Runs _Reliance Partners_QMF_COG_QLY_1.0',
    transactionId: '123499323#1',
    employeeName: 'Test_Emp_1'
  },
  {
    id: 2,
    department: 'Insurance',
    client: "Reliance Partners",
    process: 'Loss Runs ',
    form: 'Loss Runs _Reliance Partners_QMF_COG_QLY_1.0',
    transactionId: '223499323#2',
    employeeName: 'Test_Emp_2'
    
  }
]);


  const [count, setCount] = useState(2)
  const handleChangeSelectTransId = (e) =>{
    setTransactionId(e.target.value)
  }
  const handleChangeSelectEmployee = (value) => {
    setSelectedEmployee(value);

  };
  const handleChangeSelectDepartment = (value) => {
    setSelectedDepartment(value);

  };

  const handleChangeSelectClient = (value) => {
    setSelectedValueClient(value);

  };
  const handleChangeSelectProcess = (value) => {
    setSelectedValueOptions(value);

  };
  const handleChangeSelectForms = (value) => {
    setSelectedValueForm(value);

  };
  const clearSelected = () => {
    // this line will clear the select
    // when you click on the button
    setSelectedDepartment(null)
    setSelectedValueClient(null)
    setSelectedValueOptions(null)
    setSelectedValueForm(null)
    setSelectedEmployee(null)
    setTransactionId("")
  }
  // useEffect(()=>{

  // },[selectedDepartment])
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',


    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
    },
    {
      title: 'Client',
      dataIndex: 'client',
      key: 'client',
    },
    {
      title: 'Process',
      dataIndex: 'process',
      key: 'process',
    },
    {
      title: 'Form',
      dataIndex: 'form',
      key: 'form',
    },
    {
      title: 'Transaction ID',
      dataIndex: 'transactionId',
      key: 'transactionId',
      width: '150px',
      render: (text, record) =>
      (
        <>
        <AccountBookOutlined /> 
        <span style={{marginTop:'8px'}}>{record.transactionId}
        </span>  </>        )
      ,
    },
    {
      title: 'Employee Name',
      dataIndex: 'employeeName',
      key: 'employeeName',
      width: '150px',
      render: (text, record) =>
      (
        <>
       <UserOutlined /> 
       <span style={{marginTop:'8px'}}>{record.employeeName}
       </span>  </>   )
    },
    {
      title: 'View/Edit Form',
      dataIndex: 'viewEditForm',
      key: 'viewEditForm',
      render: (text, record) =>
      (
        <Button type="primary" onClick={() => { window.open("http://localhost:3000/lossruns", "_blank"); }}>View/Edit</Button>
      )
    },
  ];
  return (
    <div style={{ backgroundColor: "white", height: "100%", background: "white" }}>


      <div style={{
        borderStyle: "solid", padding: "40px", borderColor: "grey", borderWidth: "2px", textAlign: "center",
        // backgroundColor: "#8EC5FC",
        // backgroundImage: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)"
       
      }}>
        <div style={{display:"flex"}}>
        <div >
                 <div>Department :    </div>
        <Select
          defaultValue=""
          style={{
            width: 200,
            marginRight: "20px"
          }}
          onChange={handleChangeSelectDepartment}
          options={departmentOptions}
          value={selectedDepartment}
          allowClear
        /></div>
        <div >
        <div>Client : </div>
        <Select
          defaultValue=""
          style={{
            width: 200,
            marginRight: "20px"
          }}
          onChange={handleChangeSelectClient}
          options={clientOptions}
          value={selectedValueClient}
          allowClear
        />
</div>
<div >
        <div>Task  : </div>
        <Select
          defaultValue=""
          style={{
            width: 200,
            marginRight: "20px"
          }}
          onChange={handleChangeSelectProcess}
          options={processOptions}
          value={selectedValueOptions}
          allowClear
        />

</div>
<div >
<div>Generate Form  : </div>
<Button type="primary" onClick={() => {
          setData([...data, {
            id: count + 1,
            department: 'Insurance',
            client: "Reliance Partners",
            process: 'Loss Runs ',
            form: 'Loss Runs _Reliance Partners_QMF_COG_QLY_1.0',
            employeeName: employeeSelected,
            transactionId:transactionId

          }])
          setCount(count + 1)
        }}>Create Form</Button></div>
</div>
<div style={{display:"flex",marginTop:'8px'}}>
<div >
        <div>Form :  </div>
        <Select
          defaultValue=""
          style={{
            width: 200,
            marginRight: "20px"
          }}
          onChange={handleChangeSelectForms}
          options={formOptions}
          value={selectedValueForm}
          allowClear
        />
        </div>
        <div >
        <div>Transaction ID :  </div>
        {/* <Select
          defaultValue=""
          style={{
            width: 200,
            marginRight: "20px"
          }}
          onChange={handleChangeSelectForms}
          options={formOptions}
        /> */}
        <input  prefix={<UserOutlined />}   style={{
            width: 200,
            marginRight: "20px"
          }}   onChange={handleChangeSelectTransId}  value={transactionId}
          allowClear/>
 </div>
 <div >
        <div>Employee Name:  </div>
        <Select

          defaultValue=""
          style={{
            width: 200,
            marginRight: "20px"
          }}
          onChange={handleChangeSelectEmployee}
          options={employeeList}
          value={employeeSelected}
          allowClear
        />
 </div>
 <div >
<div>Clear Selection  : </div>
<Button type="primary" onClick={clearSelected}style={{ background: "#FF4D4F", borderColor: "#FF4D4F" }}>Clear</Button></div>

   </div>
  
      </div>
      <Table
        style={{ marginTop: "30px" }}
        dataSource={data}
        columns={columns}

      />

    </div>
  );
}

export default Forms;