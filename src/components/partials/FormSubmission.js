import React from 'react'

const FormSubmission = (props) => {
  const { firstName, lastName, age} = props;
    return (
        <>
           <div>First Name: {firstName}</div>
           <div>lastName Name: {lastName}</div>
           <div>Age: {age}</div>
        </>
    )
}

export default FormSubmission




