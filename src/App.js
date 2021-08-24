//import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import { getAllUsers } from './actions/userActions';
import './components/form.css';
import React, { Component } from 'react';
import {connect} from 'react-redux';

 

//function 
export class App extends Component{
  componentDidMount(){
    this.props.getAllUsers();
  };

  render(){
    return (
      <div style={{                 
        backgroundImage: `url("green-galaxy.jpg")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"     
      }}>
      
      <div className="container contapp">
      <div><h3> A Note Book Application</h3>
        <div className="row">
          <div className="col-md-5">
          <h6>Note App Form</h6>
            <UserForm />
          </div>
  
          <div className="col-md-7">
         <h6>Note App Details</h6>
            <UserList />
          </div>
        </div>
      </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>({
  users: state.users,
})
  const mapDispatchToProps = {
    getAllUsers: getAllUsers
  };
export default connect(mapStateToProps, mapDispatchToProps)(App);

