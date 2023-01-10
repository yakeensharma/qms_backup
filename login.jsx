import React, { useContext } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import { useState } from 'react';
import { Alert } from 'antd';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';


function Login() {
  const user = useContext(UserContext);
  const [username] = useState("admin@cogneesol.com");
  const [password] = useState("cogneesoladmin");
  const [inputUsername,setInputUsername] = useState("");
  const [inputPwd,setInputPwd] = useState("");
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate('/forms');
  };

  return (
    <MDBContainer fluid>
      <MDBRow>

        <MDBCol sm='6'>

          <div className='d-flex flex-row ps-5 pt-5'>
          <img src="https://www.cogneesol.com/assets/images/logo.svg"
                style={{width: '185px'}} alt="logo" />
            
          </div>

          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>

            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg' type='email' size="lg" onChange={(e)=>{setInputUsername(e.target.value)}}/>
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg' type='password' size="lg" onChange={(e)=>{setInputPwd(e.target.value)}}/>

            <MDBBtn className="mb-4 px-5 mx-5 w-100 gradient-custom-2" color='info' size='lg' onClick={()=>{if(inputUsername === username && inputPwd === password){
              user.loginSetter();
              navigateHome();
           
            }
           
            }}>Login</MDBBtn>
          
            <p className="small mb-5 pb-lg-3 ms-5"><a class="text-muted" >Forgot password?</a></p>
            <p className='ms-5'>Don't have an account? <a href="#!" class="link-info">Contact Your Admin</a></p>

          </div>

        </MDBCol>

        <MDBCol sm='6' className='d-none d-sm-block px-0' style = {{marginTop:'80px'}}>
        <img src="https://webcdn.callhippo.com/blog/wp-content/uploads/2022/08/10-Ways-to-Improve-Your-Call-Quality-Monitoring-Process.png" class="img-fluid" alt="Sample image" />
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Login;