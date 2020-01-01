import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Label, Input, Table, Container } from 'reactstrap';
import { loagUserObject, sortItems, searchText } from '../redux/actions/usersAction';
import Pagination from 'react-paginating';
import {data} from './data';
// import Dnd from './Dnd';
import Cards from './Cards';

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      dnd:false
    }
  }
  componentDidMount() {
    this.props.dispatch(loagUserObject());
  }
  handleInputChange = event => {
    const query = event.target.value;
    if (query) {
      this.props.dispatch(searchText(query, true));
    } else {
      this.props.dispatch(searchText(null, false));
    }
  };

  selectEvent = (e) => {
    const size = e.target.value;
    this.props.dispatch(sortItems(size));
  }

  handlePageChange = (page, e) => {
    this.setState({
      currentPage: page
    });
  };

  handleDnd=()=>{
  this.setState({dnd:!this.state.dnd})
  }
  render() {

    const { currentPage } = this.state;
    const limit = 2;
    const pageCount = 3;
    const { userDetails, filterItems, searchFilterObject, index, isValidSearchText } = this.props;
    const total = userDetails.length * limit
    let listObject = [];
    if (isValidSearchText) {
      listObject = searchFilterObject;
    } else if (index > 0) {
      listObject = filterItems;
    } else if(this.state.dnd){
      return <Cards data={data}/>
    }
    else {
      listObject = userDetails;
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
            <div>
              <p onClick={this.handleDnd}>Dnd file</p>
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
          </div>
          <div>
            <Row>
              <Col sm={4}>
                <p><Label>Items</Label>
                  <Input type="select" name="select" onChange={e => this.selectEvent(e)}>
                    <option>10</option>
                    <option>7</option>
                    <option>5</option>
                    <option>3</option>
                  </Input>
                </p>
              </Col>
              <Col sm={6}>
                <div>
                  <Pagination 
                    total={total}
                    limit={limit}
                    pageCount={pageCount}
                    currentPage={currentPage}
                  >
                    {({
                      pages,
                      currentPage,
                      hasNextPage,
                      hasPreviousPage,
                      previousPage,
                      nextPage,
                      totalPages,
                      getPageItemProps
                    }) => (
                        <div>
                          <small {...getPageItemProps({ pageValue: 1, onPageChange: this.handlePageChange })}>first</small>
                          {hasPreviousPage && (<small {...getPageItemProps({ pageValue: previousPage, onPageChange: this.handlePageChange })}>
                            {'<'} </small>
                          )}
                          {pages.map(page => {
                            let activePage = null;
                            if (currentPage === page) {
                              activePage = { backgroundColor: '#fdce09' };
                            }
                            return (
                              <small {...getPageItemProps({
                                pageValue: page, key: page, style: activePage, onPageChange: this.handlePageChange
                              })}>{page} </small>
                            );
                          })}
                          {hasNextPage && (<small {...getPageItemProps({
                            pageValue: nextPage, onPageChange: this.handlePageChange
                          })}> {'>'}</small>
                          )}
                          <small {...getPageItemProps({ pageValue: totalPages,
                             onPageChange: this.handlePageChange})}> last</small>
                        </div>
                      )}
                  </Pagination>
                </div>
               </Col>
            </Row>
          </div>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}
export default connect(mapStateToProps)(UserDetails);
