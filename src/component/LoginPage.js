import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import {User, setUser} from '../Store';

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
        const {email, password}=this.state;
        if(email===User.email && password===User.password){
            setUser(true);
           }else{
            setUser(false);
         }
    }
    render() {
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
const mapStateToProps = (state) => {
    return state;
  }
  
export default connect(mapStateToProps)(LoginPage);