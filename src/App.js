import React from 'react'
import ReactDOM from "react-dom";

// components
import Form from './components/partials/Form';
import UserForm from './components/partials/UserForm';

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
