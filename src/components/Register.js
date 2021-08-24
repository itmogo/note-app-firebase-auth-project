import React from "react";
import { connect } from 'react-redux';
import { registerWithEmail } from "../store/authActions";

function Register(props) {

const handleSubmit = (e) =>{
    e.preventDefault();
    let email = e.target.elements.email.value;
    let password = e.target.elements.pass.value;
    props.registerWithEmail(email, password);
}

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
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = () =>{

}

const mapDispatchToProps = {
    registerWithEmail
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
