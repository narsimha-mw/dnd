import { SEARCH, NEWS_SOURCE, SEARCH_TEXT, SEARCH_ITEMS, NEWS_ERROR_RECEIVE } from '../actions/actionsTypes';

const initialState = {
  allNews: [],
  message: '',
  color:'',
  isLoading: false,
  image: [],
  searchText: '',
  searchNames: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH: {
      const { value } = action;
      const works = state.contents.filter((val) => val.includes(value));
      return { ...state, value, works };
    }
    case NEWS_SOURCE:
      return { ...state, allNews: action.allNews, message: action.successMessage, color: action.color, isLoading: !state.isLoading };
    case SEARCH_TEXT:
      return { ...state, searchText: action.searchText }
    case SEARCH_ITEMS:
      return { ...state, searchNames: action.searchNames }
    case NEWS_ERROR_RECEIVE:
      return { ...state, message: action.errorMessage, color:action.color, isLoading: false };
    default:
      return state;
  }
}
export function bindActionCreators() {
  return null;
}