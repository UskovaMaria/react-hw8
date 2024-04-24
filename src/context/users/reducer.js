import { ADD_USER, REMOVE_USER, EDIT_USER } from "../users/boilerplate";

export const initialState = [
  { id: 1, title: 'User 1' },
  { id: 2, title: 'User 2' },
];

export const reducer = (state, action) => {
  switch (action.type) {

    case ADD_USER:
      return [...state, action.payload];

    case REMOVE_USER:
      return state.filter(user => user.id !== action.payload.id);

    case EDIT_USER:
      return state.map(user => {
        if (user.id === action.payload.id) {
          return { ...user, title: action.payload.title };
        } else {
          return user;
        }
      });

    default:
      throw new Error();
  }
}

