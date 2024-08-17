import React from 'react';
import CommonInput from '../common-input';

function CommonForm({ formControls = [], formData, setFormData,buttonText,onHandleSubmit }) {
    const formTypes = {
        INPUT: 'input',
        SELECT: 'select',
        TEXTAREA:'textarea'
    }

    function renderFormElement(getCurrentElement) {
        let content = null;
        switch (getCurrentElement?.componentType) {
            case formTypes.INPUT:
                content =
                    <CommonInput
                    label={getCurrentElement.label}
                    type={getCurrentElement.type}
                    id={getCurrentElement.id}
                    // componentType={getCurrentElement.componentType}
                    name={getCurrentElement.name}
                    placeholder={getCurrentElement.placeholder}
                    onChange={(e) => setFormData({
                        ...formData,[e.target.name]: e.target.value
                    })}
                    value={formData[getCurrentElement.name]} />
                break;
        
            default:
                content =
                    <CommonInput
                    label={getCurrentElement.label}
                    // type={getCurrentElement.type}
                    id={getCurrentElement.id}
                    type={getCurrentElement.type}
                    name={getCurrentElement.name}
                    placeholder={getCurrentElement.placeholder}
                    onChange={(e) => setFormData({
                        ...formData, [e.target.name]: e.target.value
                    })}
                    value={formData[getCurrentElement.name]} />
                break;
                
        }
        return content;
    };
    
    return (
        <form onSubmit={onHandleSubmit}>
        {
                formControls?.length ? formControls.map((getSingleItem, index) =>
                    renderFormElement(getSingleItem)
            ):null
            }
            <div style={{ marginTop: "12px" }}>
                <button type='submit'>{ buttonText || "submit" }</button>
            </div>
        </form>
    )
  
}

export default CommonForm;