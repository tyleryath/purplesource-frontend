export const updateTitle = (title) => dispatch => {
   dispatch({
      type: 'UPDATE_TITLE',
      payload: title
   })
}

export const updateDate = (date) => dispatch => {
   dispatch({
      type: 'UPDATE_DATE',
      payload: date
   })
}

export const updateAuthor = (author) => dispatch => {
   dispatch({
      type: 'UPDATE_AUTHOR',
      payload: author
   })
}

export const updateImageURL = (imageURL) => dispatch => {
   dispatch({
      type: 'UPDATE_IMAGE_URL',
      payload: imageURL
   })
}

export const updateDescription = (description) => dispatch => {
   dispatch({
      type: 'UPDATE_DESCRIPTION',
      payload: description
   })
}
