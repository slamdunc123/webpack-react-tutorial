import React, { Component } from 'react';
import FormPart1 from './FormPart1';
import FormPart2 from './FormPart2'

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        age: ''
    }

    nextStep = (e) => {
        e.preventDefault()
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }

    prevStep = (e) => {
        e.preventDefault()
        const { step } = this.state;
        this.setState({
            step: step -1
        })
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        // console.log(this.state);
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
        console.log(this.state);
        
    }
    
  render() {
      const { step } = this.state
      const { firstName, lastName } = this.state
      const values = { firstName, lastName }
    // return (
    //   <div>
    //     <h2>User Form</h2>
    //   </div>
    // );

    switch (step) {
        case 1:
            return (
                <>
                    <h3>Form Part 1</h3>
                    <FormPart1 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                </>
            )

        case 2: 
            return (
                <>
                    <h3>Form Part 2</h3>
                    <FormPart2 
                        // nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange}
                        values={values}
                    />
                </>
            )
            default:
                return null
    }
  }
}

export default UserForm;
