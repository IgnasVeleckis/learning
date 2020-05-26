import {ShoppingItem} from '../models/shopping-item.model';
import {ShoppingAction, ShoppingActionTypes} from '../actions/shopping.actions';

const initialState: Array<ShoppingItem> = [
  {
    id: '1',
    name: 'Diet Coke'
  },
  {
    id: '2',
    name: 'Fanta'
  },
]


export function ShoppingReducer(state: Array<ShoppingItem> = initialState, action: ShoppingAction) {
  switch (action.type) {
    case ShoppingActionTypes.ADD_ITEM:
      console.log(action.type)
      return [...state, action.payload]
    case ShoppingActionTypes.REMOVE_ITEM:
      console.log(action.type);
      return state.filter(item => item.id !== action.payload)
    default:
      return state;
  }
}
