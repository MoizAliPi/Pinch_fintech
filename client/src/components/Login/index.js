/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { Container, Col, Form,
         FormGroup, Label, Input,
         Button, FormText, FormFeedback } from 'reactstrap';
import './Login.css';    


class loginPage extends Component {
    constructor(props) {
        super(props);
          this.state = {
          'email': '',
          'password': '',
          'error': false,
          validate: {
            emailState: '',
          },
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
      }
    
      //Validating the email format
      validateEmail(e) {
        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { validate } = this.state
          if (emailRex.test(e.target.value)) {
            validate.emailState = 'has-success'
          } 
          this.setState({ validate })
        }
        
      //Handling the changes in input  
      handleChange = async (event) => {
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;
        await this.setState({
          [ name ]: value,
        });
      }

      //saving the password for authentication
      savePassword (event) {
        this.setState({
          password: event.target.value,
        });
      }
    
      //checking the password and pushing the upload page
      submitForm(e) {
        e.preventDefault();
        const { email, password } = this.state;

        if (this.state.password === 'stark007') {
          this.props.history.replace( '/upload' );
          console.log("you're logged in. yay!");
        } else {
          alert('Wrong Password');
        }   
      }
      
    render() {
        const { email, password } = this.state;
    return (
        <div>
        <h1 className="logoHead">Pinch Financial</h1>   
        <Container className="Login" id="bootstrap-overrides">
        <h2 className="mb-3">Login</h2>
        <Form className="form" onSubmit={ (e) => this.submitForm(e) }>
          <Col id="col-new">
            <FormGroup>
              <Label>Username</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
                value={ email }
                valid={ this.state.validate.emailState === 'has-success' }
                onChange={ (e) => {
                            this.validateEmail(e)
                            this.handleChange(e)
                          } }
              />
              <FormFeedback valid>
                All good !
              </FormFeedback>
              <FormFeedback>
                Please input a correct email.
              </FormFeedback>
              <FormText>Your username is most likely your email.</FormText>
            </FormGroup>
          </Col>
          <Col id="col-new">
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
                value={ password }
                onChange={ (e) => this.savePassword(e) }
            />
            </FormGroup>
          </Col>
          <Col className="btnWrapper">
          <Button className="submitBtn mt-3">Login</Button>
          </Col>
      </Form>
      </Container>
      </div>
        );
      }
}

export default loginPage;