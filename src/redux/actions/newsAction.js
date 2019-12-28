import Axios from 'axios';
import { GET, SORT_ITEMS } from './actionsTypes';

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
export function searchText(searchText) {
  return {
    type: SEARCH_TEXT,
    searchText
  }
}

export function sortItems(index) {
  return {
    type: SORT_ITEMS,
    index
  }
}

