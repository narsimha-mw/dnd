import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Row, Col, Label, Input, Table, Container } from 'reactstrap';
import Pagination from './Pagination';
import {loagUserObject} from '../redux/actions/newsAction';

class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            page:false
        }
    }
    componentDidMount() {
       this.props.dispatch(loagUserObject());
    }
    handleInputChange = event => {
        const query = event.target.value;
         console.log(query)
        this.setState(prevState => {
            const filteredData = prevState.filteredData.filter(element => {
                return (element.name.toLowerCase().includes(query.toLowerCase()) ||
                    element.username.toLowerCase().includes(query.toLowerCase()) ||
                    element.company.name.toLowerCase().includes(query.toLowerCase())
                );
            });

            if (query !== null || query !== '') {
                console.log("is calling")
                return { query, filteredData };
            } else {
                return filteredData;
            }
        });
        
    };
    
    selectEvent=(e)=>{
        const size=e.target.value;
        this.setState({size});
    }
page=()=>{
    this.setState({page:!this.state.page})
}
    render() {
        const { filteredData, page, size } = this.state;
        const {userDetails}=this.props;
        let data=[];
        if(size){
            data=userDetails.filter(item=> item.id<=parseInt(size));
       }else if(page){
        return <Pagination todos={userDetails}/>
    }else{
            data=userDetails;
       }
        const result = data.map((user, id) => { 
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
                    </Container>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
// console.log(state)
    return state;
}
export default connect(mapStateToProps) (UserDetails);
