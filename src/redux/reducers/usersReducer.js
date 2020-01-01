import { PAGINATION_ITEMS, GET, SORT_ITEMS, SEARCH_TEXT} from '../actions/userActionsTypes';

const initialState = {
  userDetails: [], // orifginal list
  filterItems:[], // filter list
  searchFilterObject:[], //search query by filter
  index: 0,
  isValidSearchText:false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    
    case GET:
      return { ...state, userDetails:action.userDetails};

    case SORT_ITEMS:
      const data=state.userDetails.filter(item=> item.id<=parseInt(action.index));
      return {        
        ...state, filterItems:data, index: action.index
            }

      case SEARCH_TEXT:
        const query=action.searchText;
        if(query){
        const searchObject=  state.userDetails.filter(element => {
          return (element.name.toLowerCase().includes(query.toLowerCase()) ||
              element.username.toLowerCase().includes(query.toLowerCase()) ||
              element.company.name.toLowerCase().includes(query.toLowerCase())
          );
      });
      return {...state, searchFilterObject:searchObject, isValidSearchText:action.searchAction }
    }else{
      return {...state, isValidSearchText:action.searchAction}
    }
    
    case PAGINATION_ITEMS:
      return{...state, userDetails:action.object}
    
      default:
      return state;
  }
}
export function bindActionCreators() {
  return null;
}