import React from 'react'
import ReactDOM from "react-dom";

// components
import Form from './js/components/Form';

const App = () => {
    return (
        <div>
            <Form />
            
        </div>
    )
}

export default App

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
