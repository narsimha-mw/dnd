import { PAGINATION_ITEMS, GET, SORT_ITEMS, SEARCH_TEXT, MOVE_FORWARD_DATA, MOVE_BACKWARD_DATA, MOVE_FORWARD, MOVE, MOVE_BACKWARD} from '../actions/userActionsTypes';

const initialState = {
  userDetails: [], // orifginal list
  filterItems:[], // filter list
  searchFilterObject:[], //search query by filter
  index: 0,
  isValidSearchText:false,
  forwordMoveItem:[],
  backwordMoveItem:[]
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
    case MOVE:
      return{...state, forwordMoveItem:action.data }
    case MOVE_FORWARD:
        const {forwordMoveItem}=state;
        return{...state, forwordMoveItem:forwordMoveItem.filter((item,id)=>{return id!==action.id}) }
      case MOVE_FORWARD_DATA:        
        return{...state, backwordMoveItem: [...state.backwordMoveItem, action.data]}
        case MOVE_BACKWARD:
          const {backwordMoveItem}=state;
          return{...state, backwordMoveItem:backwordMoveItem.filter((item,id)=>{return id!==action.id}) }
        case MOVE_BACKWARD_DATA:        
          return{...state, forwordMoveItem: [...state.forwordMoveItem, action.data]}
      default:
      return state;
  }
}
export function bindActionCreators() {
  return null;
}