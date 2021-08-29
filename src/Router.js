import ReactDOM from 'react-dom';
import React from 'react';
import EditUserForm from "./components/EditUserForm";
import {BrowserRouter, Route} from 'react-router-dom';
import App from './App';
import Register from './components/Register';
import Login from './components/Login';
import Router from './Router';
import ProtectRoute from './components/ProtectRoute';


const Router = () => {
    return (
        <BrowserRouter>
            <ProtectRoute exact path="/" component ={App} />
            <Route exact path="/edit/:id" component={EditUserForm} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login"  component={Login} />
        </BrowserRouter>
    );
}

 export default Router;