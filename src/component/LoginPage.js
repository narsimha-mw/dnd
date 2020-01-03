import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { loginPage } from '../redux/actions/usersAction';
import { connect } from 'react-redux';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email:'',
            password:'',
         }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    submit=(e)=>{
        e.preventDefault();
        this.props.dispatch(loginPage(true))
    }
    render() {
        console.log("object")
        const {email, password}=this.state;
        return (<>
            <Form onSubmit={this.submit}>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" placeholder="Email" value={email} onChange={(e)=>this.handleChange(e)}/>
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" placeholder="password "  value={password} onChange={(e)=>this.handleChange(e)} />
      </FormGroup>
      <Button >Submit</Button>
    </Form>
        </>);
    }
}
 
export default connect()(LoginPage);