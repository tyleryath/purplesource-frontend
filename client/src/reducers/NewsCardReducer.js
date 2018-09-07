const INITIAL_STATE = {
  title: 'purplesource',
  date: 'purplesource',
  author: 'purplesource',
  imageURL: 'https://myfirstshiba.com/wp-content/uploads/2017/11/AdobeStock_149297117.jpg',
  description: 'purplesource',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_TITLE':
       return { ...state, title: action.payload }
    case 'UPDATE_DATE':
      return { ...state, date: action.paylod }
    case 'UPDATE_AUTHOR':
      return { ...state, author: action.payload }
    case 'UPDATE_IMAGE_URL':
      return { ...state, imageURL: action.payload }
    case 'UPDATE_DESCRIPTION':
      return { ...state, description: action.payload }
    default:
      return state
  }
}
