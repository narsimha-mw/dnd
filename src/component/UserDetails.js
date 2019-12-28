import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Row, Col, Label, Input, Table, Container } from 'reactstrap';
import {loagUserObject, sortItems, searchText} from '../redux/actions/newsAction';

class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page:false
        }
    }
    componentDidMount() {
       this.props.dispatch(loagUserObject());
    }
    handleInputChange = event => {
        const query = event.target.value;
        if(query){           
        this.props.dispatch(searchText(query, true));
        }else{
           this.props.dispatch(searchText(null, false));
        }        
    };
    
    selectEvent=(e)=>{
        const size=e.target.value;
        this.props.dispatch(sortItems(size));
    }
    
page=()=>{
    this.setState({page:!this.state.page})
}
    render() {
        const {userDetails, filterItems, searchFilterObject, index, isValidSearchText}=this.props; 
        let listObject=[];
        if(isValidSearchText){
           listObject=searchFilterObject;
        }else if(index>0){
            listObject=filterItems;
        }else{
          listObject=userDetails;
        }
        const result = listObject.map((user, id) => { 
            return (<tr key={id}>
                <td><b>{user.name}</b><br /> {user.email}</td>
                <td>{user.phone}</td>
                <td>{user.username}</td>
                <td>{user.company.name}</td>
            </tr>
            )
        })
        return (
            <div>
                <Container style={{ paddingTop: 10 }}>
                    <div className="searchForm">
                        <form>
                            <input placeholder="Search for..."
                                value={this.state.query} onChange={this.handleInputChange}
                            />
                        </form>
                    </div>
                  <div>
                   <Table bordered striped>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>phone</th>
                                <th>Username</th>
                                <th>Company Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {result}
                        </tbody>
                    </Table>
                    </div>
                    <div>
                    <Row>
                        <Col sm={4}>
                            <p><Label>Items</Label>
                                <Input type="select" name="select" onChange={e=>this.selectEvent(e)}>
                                    <option>10</option>
                                    <option>7</option>
                                    <option>5</option>
                                    <option>3</option>
                                    </Input>
                            </p>
                        </Col>
                        <Col sm={6} onClick={this.page}>Pagination</Col>
                    </Row>
                    </div>
                    </Container>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return state;
}
export default connect(mapStateToProps) (UserDetails);
