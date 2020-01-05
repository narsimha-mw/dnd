import React, { Component } from 'react';
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import { Row, Col, Card, Container, Table } from 'reactstrap';
import { connect } from 'react-redux';
import { moveData, forwordMove, fordwordMoveData, backwordMove, backwordMoveData } from '../redux/actions/usersAction';
import './style.css';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.data.lane
    }
  }

  // get dummy array list
  componentDidMount() {
    const { items } = this.state;
    this.props.dispatch(moveData(items));
  }

  handleClickForwordItem = (forwordId) => {
    this.setState({ forwordId: forwordId });
  }

  handleClickBackwordItem = (id) => {
    this.setState({ backwordId: id });
  }


  // left side action with reducer
  forwordItemButton = (id) => {
    const { forwordMoveItem } = this.props;
    this.props.dispatch(forwordMove(id));
    const data = forwordMoveItem.filter((item, iId) => iId === id);
    this.props.dispatch(fordwordMoveData(data));
  }
  // right side action with reducer
  backwordItemButton = (id) => {
    const { backwordMoveItem } = this.props;
    this.props.dispatch(backwordMove(id));
    const data = backwordMoveItem.filter((item, iId) => iId === id);
    this.props.dispatch(backwordMoveData(data));
  }

  render() {
    const { forwordMoveItem, backwordMoveItem } = this.props; //redux: store state objects
    const { forwordId, backwordId } = this.state;

    // left side table
    const forward = forwordMoveItem && forwordMoveItem.map((name, id) => {
      return <tr className="item" style={{}} key={id}
        onClick={() => this.handleClickForwordItem(id)}>{name}</tr>
    })
    //  list(right side table)
    const backward = backwordMoveItem && backwordMoveItem.map((name, id) => {
      return <tr className="item" key={id}
        onClick={() => this.handleClickBackwordItem(id)}>{name}</tr>
    })

    return (
      <>
        <Container>
          <Row>
            <Card>
              <Col sm={5}>
                <span className="border border-dark">
                  <Table >
                    <tbody>
                      <td>{forward}</td>
                    </tbody>
                  </Table>
                </span>
              </Col>
            </Card>
            <Col sm={2}>
              <div className="icons">
                {/* left arrow icon */}
                <div>
                  <IoMdArrowDropleft className="arrow" onClick={() => this.forwordItemButton(forwordId)} />
                </div>
                {/* right arrow icon */}
                <div>
                  <IoMdArrowDropright className="arrow" onClick={() => this.backwordItemButton(backwordId)} />
                </div>
              </div>
            </Col>
            {backward && <Card>
              <Col sm={5}>
                <Table >
                  <tbody>
                    <td>{backward}</td>
                  </tbody>
                </Table>
              </Col>
            </Card>
            }
          </Row>
        </Container>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}
export default connect(mapStateToProps)(Cards); // connect to store