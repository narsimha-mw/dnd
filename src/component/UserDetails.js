import React, { Component } from 'react';
import Axios from 'axios';
import { Row, Col, Label, Input, Table, Container } from 'reactstrap';

class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredData: [],
            query: ""  
        }
    }
    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => response)
            .then(response => this.setState({ filteredData: response.data }))
            .catch(error => console.log(error));
    }
    handleInputChange = event => {
        const query = event.target.value;
        // console.log(query)
        this.setState(prevState => {
            const filteredData = prevState.filteredData.filter(element => {
                return (element.name.toLowerCase().includes(query.toLowerCase()) ||
                    element.username.toLowerCase().includes(query.toLowerCase()) ||
                    element.company.name.toLowerCase().includes(query.toLowerCase())
                );
            });
            if (query !== null || query !== '') {
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

    render() {
        const { filteredData, size } = this.state;
        let data=[];
        if(size){
            data=filteredData.filter(item=> item.id<=parseInt(size));
       }else{
            data=filteredData;
       }
        const result = data.map((user, id) => { 
            return (<tr key-={id}>
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
                                    <option>3</option>
                                    <option>5</option>
                                    <option>7</option>
                                    <option>10</option>
                                    </Input>
                            </p>
                        </Col>
                        <Col sm={6}>Pagination</Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default UserDetails;
