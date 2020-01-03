import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Container, Row, Col, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { moveData, forwordMove,fordwordMoveData, backwordMove, backwordMoveData } from '../redux/actions/usersAction';


class Cards extends Component{
    constructor(props){
        super(props);
        this.state={
            // items:this.props.data.lanes,
            items:this.props.data.lane,
        }
    }
    componentDidMount(){
      const {items}=this.state;
      this.props.dispatch(moveData(items));
    }

  handleClickForword=(id)=>{
this.setState({forwordId:id});
}
handleClickBackword=(id)=>{
  this.setState({backwordId:id});
      console.log("handleClickBackword: ", id)
  }

    forwordItemButton=(id)=>{
      const {forwordMoveItem}=this.props;
      this.props.dispatch(forwordMove(id));
      const data=forwordMoveItem.filter((item,iId)=>iId===id);
      this.props.dispatch(fordwordMoveData(data));
    }
    backwordItemButton=(id)=>{
      const {backwordMoveItem}=this.props;
      this.props.dispatch(backwordMove(id));
      const data=backwordMoveItem.filter((item,iId)=>iId===id);
      this.props.dispatch(backwordMoveData(data));
    }
    render(){
      const {forwordMoveItem, backwordMoveItem}=this.props;
      const {forwardId, backwordId}=this.state;
      
const forward=forwordMoveItem && forwordMoveItem.map((name,id)=>{return<p key={id} onClick={()=>this.handleClickForword(id)}>{name}</p>})
const backward=backwordMoveItem && backwordMoveItem.map((name,id)=>{return<p key={id} onClick={()=>this.handleClickBackword(id)}>{name}</p>})

      return(
        <>
        <Container>
          <br/>
          <Row>
            <Col sm={5}>
          <span className="border border-dark">
            {forward}
            </span>
            </Col>
            <Col sm={2}>
            <p><Button color="success" onClick={()=>this.forwordItemButton(forwardId)}>Forword</Button></p>
            <p><Button color="danger" onClick={()=>this.backwordItemButton(backwordId)}>Backword</Button></p>
            </Col>
            <Col sm={5}>{backward}
            </Col>
          </Row>
        </Container>
        </>
      )
    }
    }
    
const mapStateToProps = (state) => {
  console.log("object", state)
   return state;
 }
export default connect(mapStateToProps)(Cards);
// export default connect()(Cards);