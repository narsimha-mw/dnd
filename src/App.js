import React from 'react';
import './App.css';
import UserDetails from './component/UserDetails';
import { Switch, Route, Redirect } from 'react-router';
import Dashboard from './component/Dashboard';
import LoginPage from './component/LoginPage';
import { connect } from 'react-redux';
import Store from './redux/container/configureStore';

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
        <Route exact path="/" component={LoginPage}/>
        <PrivateRoute exact path="/dashboard" component={Dashboard}/>
        <PrivateRoute exact path="/userDetails" component={UserDetails}/>
      </Switch>
      {/* <UserDetails/> */}
    </div>
  );
}
}

// export default App;

 function PrivateRoute({component: Component, props, ...rest}){
  //  const {isLogin}=props;
   console.log(this.props)
  const 
 return <Route 
  {...rest}
  render={props=>console.log("object: ", props),"isLogin"?(
    <Component {...props}/>
  ):(<Redirect to={{pathname:"/login",
    state:{from:props.location}
}}
/>
  )}
/>
 }
 
 const mapStateToProps = (state) => {
   console.log(state.isLogin)
  return state.isLogin;
}
export default connect(mapStateToProps) (PrivateRoute); 
function route(){
  //  const {isLogin}=props;
  //  console.log(this.props)
  const data=Store.getState();
  console.log(data)
 }
 store.subscribe(aFunction)
