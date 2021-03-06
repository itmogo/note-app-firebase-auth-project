import React from "react";
import { connect } from "react-redux";
import { registerWithEmail, loginWithGoogle } from "../store/authActions";

function Register(props) {
  //check if user is logged in
  if(!props.auth.isLoaded) return null;

  //if user is logged in redirect to register page
  if (props.auth.uid) props.history.push('/');

  const handleSubmit = (e) => {
    e.preventDefault();
    let email = e.target.elements.email.value;
    let password = e.target.elements.pass.value;
    props.registerWithEmail(email, password);
  };

  return (
    <div>
      <h1>Register Now</h1>
      <form className="formShadow" onSubmit={handleSubmit}>
        <div>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>
              <b>Email Address</b>
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email address"
              name="email"
              required
            />
          </Form.Group>
        </div>
        <br />
        <Form.Group controlId="formBasicEmail">
          <Form.Label>
            <b>Password</b>
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="pass"
            required
          />
        </Form.Group>
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
  registerWithEmail,
  loginWithGoogle,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
