import axios from 'axios';
import { NEWS_SOURCE, NEWS_ERROR_RECEIVE, SEARCH, SEARCH_TEXT, SEARCH_ITEMS } from './actionsTypes';

const URL = "http://www.mocky.io/v2/5d8686a032000024b607b40e?callback?myfunction";

function storeNewsObject(allNews) {
  return {
    type: NEWS_SOURCE,
    allNews,
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
export function loagNewsObject() {
  return dispatch => {
    return axios.get(URL)
      .then(response => dispatch(storeNewsObject(response.data.articles)))
      .catch(error => dispatch(handelError(error)))
  }
}
export function searchText(searchText) {
  return {
    type: SEARCH_TEXT,
    searchText
  }
}

export function filterItems(text) {
  return {
    type: SEARCH_ITEMS,
    searchNames: text
  }
}

