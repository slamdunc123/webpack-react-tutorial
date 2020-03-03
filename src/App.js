import React from 'react'
import ReactDOM from "react-dom";

// components
import Form from './js/components/Form';
import UserForm from './js/components/UserForm';

const App = () => {
    return (
        <div>
            {/* <Form /> */}
            <UserForm />
        </div>
    )
}

export default App

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
