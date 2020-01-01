import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Card, CardText } from 'reactstrap';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const SortableItem = SortableElement(({value}) =>{
return(
     <div>
      <CardText>{value}</CardText>
      </div>
      )
      });

const SortableList = SortableContainer(({items, props}) => {
    return (
      <Card>
        {items.map((value, index) => (
              <SortableItem onClick={props.handleClick(index)} key={`item-${index}`} index={index} value={value} />
            ))}
         </Card>
       
    );
  });
class Cards extends Component{
    constructor(props){
        super(props);
        this.state={
            items:this.props.data.lanes
        }
    }

  handleClick=(id)=>{
    console.log("=", id)
}

    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState({
          items: arrayMove(this.state.items, oldIndex, newIndex),
        });
      };
      render() {
        return <SortableList 
                 items={this.state.items} 
                 onSortEnd={this.onSortEnd} 
                 transitionDuration={89}
                 onSortStart={this.handleClick}/>;
      }
    }
export default Cards;