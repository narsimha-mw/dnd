import Axios from 'axios';
import { PAGINATION_ITEMS, GET, SORT_ITEMS, NEWS_ERROR_RECEIVE,SEARCH, SEARCH_TEXT, MOVE, MOVE_FORWARD, MOVE_FORWARD_DATA, MOVE_BACKWARD, MOVE_BACKWARD_DATA } from './userActionsTypes';

const URL = "https://jsonplaceholder.typicode.com/users";

function storeNewsObject(userDetails) {
  return {
    type: GET,
    userDetails,
    successMessage: 'successfully news loading',
    color: 'success'
  }
}
// throw error message 
export function handelError(error) {
  return {
    type: NEWS_ERROR_RECEIVE,
    errorMessage: "News information is not load, please try again...",
    color: 'danger',
    showAlert: false
  }
}

//  calling component
export function search(value) {
  return {
    type: SEARCH,
    inputSearch: value
  }
}
// calling component 
export function loagUserObject() {
  return dispatch => {
    return  Axios.get(URL)
      .then(response => dispatch(storeNewsObject(response.data)))
      .catch(error => dispatch(handelError(error)))
  }
}
export function searchText(searchText, isValid) {
  return {
    type: SEARCH_TEXT,
    searchText,
    searchAction:isValid
  }
}

export function sortItems(index) {
  return {
    type: SORT_ITEMS,
    index
  }
}
export function paginationAction(object){
  return{
    type:PAGINATION_ITEMS,
    object
  }
}
export function moveData(data){
  return{
    type: MOVE,
    data
  }
}
export function forwordMove(id){
  return{
    type: MOVE_FORWARD,
    id
  }
}
export function fordwordMoveData(data){
  return{
    type: MOVE_FORWARD_DATA,
    data
  }
}
export function backwordMove(data){
  return{
    type: MOVE_BACKWARD,
    data
  }
}
export function backwordMoveData(data){
  return{
    type: MOVE_BACKWARD_DATA,
    data
  }
}