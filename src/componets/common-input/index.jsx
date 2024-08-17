import React from 'react'

const CommonInput = ({label,name,type,onChange,componentType,id,value,placeholder}) => {
  return (
      <div>
          <label htmlFor={name}>{label}: </label>
          <input
            type={type || "text"}
            id={id}
            name={name}
            value={value}
        placeholder={placeholder || "Enter value Here"}
              onChange={onChange}>
              
            </input>
    </div>
  )
}

export default CommonInput