export const setActiveCategory = (category) => dispatch => {
   dispatch({
      type: 'SET_ACTIVE_CATEGORY',
      payload: category
   })
}
