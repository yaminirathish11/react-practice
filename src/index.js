import React from "react"
import ReactDOM from "react-dom/client"

function Greeting (){
    return React.createElement('h2' , {}, 
       React.createElement('div' , {}, React.createElement('h2' , {},'hello mini you used React.createElement' )));
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />)