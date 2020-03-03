import React, { Component } from 'react'

export class FormPart2 extends Component {
    
    // next = (e) => {
    //     e.preventDefault()
    //     this.props.nextStep()
    // }

    // prev = (e) => {
    //     e.preventDefault()
    //     this.props.prevStep()
    // }

    // submit = (e) => {
    //     e.preventDefault()
    //     this.props.handleSubmit()
    // }

    render() {
        const { handleChange, handleSubmit, prevStep} = this.props
        return (
            <>
               <form onSubmit={handleSubmit}>
                    <label htmlFor="age"></label> 
                    <input type="text"
                        id="age"
                        placeholder="age"
                        name="age"
                        onChange={handleChange}    
                    />
                    <br/>
                    <button onClick={prevStep}>Prev</button> 
                    <br/>
                    <button>Submit</button>
                </form>
            </>
        )
    }
}

export default FormPart2

