import React, { useState } from "react";
import { connect } from "react-redux";
import { updateUserAction } from "../actions/userActions";
import { Button, Form } from "react-bootstrap";

//user sign up component
function EditUserForm(props) {
  // default user state is an object with empty string as value
  const [state, setState] = useState({
    noteTitle: props.user.noteTitle,
    noteDate: props.user.noteDate,
    noteText: props.user.noteText,
  });

  //a function that get called anytime an input field changes
  function handleOnChange(event) {
    //event.target.name hold the name of the input that changed
    //event.target.value hold the new value of the input field that changed

    //we update the user state with the new value
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  }

  //this function will be called the the create user button is clicked on
  function handleSubmit() {
    //we call addUser function passed to this user form component
    //as a prop from the App component

    let user = { ...state, id: props.user.id };
    props.updateUserAction(props.user.id, user);
    props.hideModal();
  }

  return (
    <div>
      <form>
        <div>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Note Title </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your note title"
              name="noteTitle"
              value={state.noteTitle} //the value will the same as data in the state
              onChange={handleOnChange} //we setup onchange to call our handle onchange function
              required
            />
          </Form.Group>
        </div>
        <br />
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Date Recorded</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter note date"
            name="noteDate"
            value={state.noteDate}
            onChange={handleOnChange} //we setup onchange to call our handle onchange function
            required
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Note Text</Form.Label><br/>
          <textarea
            type="text"
            name="noteText"
            value={state.noteText}
            onChange={handleOnChange} //we setup onchange to call our handle onchange function
            placeholder="Enter your notes"
            required
            row="5"
            cols="40"

          />
        </Form.Group>
        <br />
          <div>
          {/* the create user button call the handleSubmit functon when clicked */}
          <Button type="button" variant="primary" onClick={handleSubmit}>
            Update Note 
          </Button>
        </div>
      </form>
    </div>
  );
}

let mapDispatchToProps = {
  updateUserAction,
};

let mapStateToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(EditUserForm);
