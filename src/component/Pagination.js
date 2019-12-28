import React from 'react'

class Pagination extends React.Component {

constructor(props) {
    super(props);
    this.state = {
     todos:this.props.todos, 
     currentPage: 1,
      todosPerPage: 5
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {
    const { todos, currentPage, todosPerPage } = this.state;
    // Logic for displaying todos
    console.log("currentPage: ", currentPage);
    
    const indexOfLastTodo = currentPage * todosPerPage;
    console.log("indexOfLastTodo: ", indexOfLastTodo);
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    console.log("indexOfFirstTodo: ", indexOfFirstTodo);
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
    console.log("currentTodos: ", currentTodos);

    const renderTodos = currentTodos.map((todo, index) => {
      return <li key={index}>{todo.name}</li>;
    });
    console.log("renderTodos: ", renderTodos)
    // Logic for displaying page numbers
    const pageNumbers = [];
     
    for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }
    console.log("pageNumbers: ", pageNumbers)
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      );
    });
    console.log("renderPageNumbers: ", renderPageNumbers)
    return (
      <div>
        <ul>
          {renderTodos}
        </ul>
        <ul id="page-numbers">
          {renderPageNumbers}
        </ul>
      </div>
    );
  }
}

export default Pagination;