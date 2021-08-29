import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { loginWithEmail, loginWithGoogle } from "../store/authActions";

function Login(props) {
  // check if user is logged in
  if(!props.auth.isLoaded) return null;

  // if user is logged in redirect user to the login page
  if(props.auth.uid) props.history.push('/');
  const handleSubmit = (e) => {
    e.preventDefault();
    let email = e.target.elements.email.value;
    let password = e.target.elements.pass.value;
    props.loginWithEmail(email, password);
  };

  return (
    <div>
      <h1>Login Now</h1>
      <form onSubmit={handleSubmit}>
        <div>
            <Form.Label>
              <b>Email Address</b>
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email address"
              name="email"
              required
            />          
        </div>
        <br />
       
          <Form.Label>
            <b>Password</b>
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="pass"
            required
          />
        
        <br />
        <div>
          {/* the create user button call the handleSubmit functon when clicked */}
          <Button type="button" variant="primary">
            <span>Join</span>
          </Button>
          <Button onClick={props.loginWithGoogle}>
            <img
              src="https://openthread.google.cn/images/ot-contrib-google.png"
              width="100"
              alt="google button"
            />
          </Button>
          
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = {
  loginWithEmail,
  loginWithGoogle,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
