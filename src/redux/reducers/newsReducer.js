import { GET, SORT_ITEMS} from '../actions/actionsTypes';

const initialState = {
  userDetails: [],

};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    
    case GET:
      return { ...state, userDetails: action.userDetails};
    case SORT_ITEMS:
      return {        
        ...state, userDetails:userDetails.filter(item=> item.id<=parseInt(action.index));
      }
      default:
      return state;
  }
}
export function bindActionCreators() {
  return null;
}