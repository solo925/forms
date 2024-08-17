import React, { useState } from 'react';
import { LoginFormElements } from '../../config';
import CommonForm from '../common-form';

function ReactLoginComponent() {

  const initials = {
    email: "",
    password:""
}

  const [loginFormData, setLoginFormData] = useState(initials)

  const onHandleSubmit = (event) => {
    event.preventDefault();
    // logic
    console.log(loginFormData);
    setLoginFormData(initials);
    
  }
  // console.log(formData);
  
  return (
    <div >
      <h3>Login page</h3>
      <CommonForm
        formData={loginFormData}
        setFormData={setLoginFormData}
        buttonText={"Login"}
        onHandleSubmit={onHandleSubmit}
        formControls={LoginFormElements} />    
          
    </div>
  )
}
export default ReactLoginComponent;
