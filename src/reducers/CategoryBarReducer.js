const INITIAL_STATE = {
  active: "PRESIDENT TRUMP"
}

export default (state = INITIAL_STATE, action) => {
  console.log(action.payload);
  switch (action.type) {
    case 'SET_ACTIVE_CATEGORY':
       return { ...state, active: action.payload }
    default:
      return state
  }
}
