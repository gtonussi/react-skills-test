export const changeText = (newText) => {
  return (dispatch) => {
    dispatch({
      type: 'change',
      payload: newText
    })
  }
}