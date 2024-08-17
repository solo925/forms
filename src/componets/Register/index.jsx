import React, { useState } from 'react';
import { RegisterFormElements } from '../../config';
import CommonForm from '../common-form';

function ReactRegisterComponent() {

  const initials = {
    name:"",
    email: "",
    password: "",
    password2:""
  }
  const onHandleSubmit = (event) => {
    event.preventDefault();
    // logic
    console.log(registerformData);
    setRegisterFormData(initials);
  }
  
  const [registerformData,setRegisterFormData] = useState(initials)
  return (
      <div>
      <h3>Register page</h3>
      <CommonForm
        formData={registerformData}
        setFormData={setRegisterFormData}
        buttonText={"Register"}
        onHandleSubmit={onHandleSubmit}
        formControls={RegisterFormElements} />    
          
    </div>
  )
}
export default ReactRegisterComponent;
