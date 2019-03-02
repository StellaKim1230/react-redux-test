const initialState = {
  users: [{
    name: 'Etst',
    age: 20,
  }],
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.payload],
      }
    default:
      return state
  }
}

export default userReducer
