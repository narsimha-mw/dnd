import React from 'react';
import './App.css';
import UserDetails from './component/UserDetails';
import { Switch, Route, Redirect } from 'react-router';
import Dashboard from './component/Dashboard';
import LoginPage from './component/LoginPage';
// import { connect } from 'react-redux';
import { getUser } from './Store';
// import Store from './redux/container/configureStore';

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
    }
  }
  render(){
  return (
    <div className="App">
      <Switch>
        {/* <Route exact path="/" component={LoginPage}/>
        <Route path="/login" component={LoginPage}/>
        <PrivateRoute exact path="/dash" component={Dashboard}/> */}
        <PrivateRoute exact path="/user" component={UserDetails}/>
      </Switch>
      {/* <UserDetails/> */}
    </div>
  );
}
}

 export default App;

 function PrivateRoute({component: Component, props, ...rest}){
 
 return <Route 
  {...rest}
  render={props=>true?(
    <Component {...props}/>
  ):(<Redirect to={{pathname:"/login",
    state:{from:props.location}
}}
/>
  )}
/>
 }