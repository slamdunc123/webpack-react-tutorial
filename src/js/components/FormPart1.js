import React, { Component } from 'react'

export class FormPart1 extends Component {

    // next = (e) => {
    //     e.preventDefault()
    //     this.props.nextStep()
    // }

    render() {
        const { handleChange, nextStep} = this.props
        return (
            <>
                <form>
                    <label htmlFor="firstName"></label>
                    <input type="text" 
                        id="firstName" 
                        placeholder="enter first name"
                        name="firstName"
                        onChange={handleChange}
                    />
                    <br/>
                    <label htmlFor="firstName"></label>
                    <input type="text" 
                        id="lastName" 
                        placeholder="enter last name"
                        name="lastName"
                        onChange={handleChange}
                    />
                    <br/>
                    <button onClick={nextStep}>Next</button>
                </form>
            </>
        )
    }
}

export default FormPart1
