import React from 'react';
import EditUserForm from "./components/EditUserForm";
import {BrowserRouter, Route} from 'react-router-dom';
import App from './App';
import Register from './components/Register';



const Router = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component ={App}/>
            <Route exact path="/edit/:id" component={EditUserForm} />
            <Route exact path="/register" component={Register}/>
        </BrowserRouter>
    );
}

 
  export default Router;