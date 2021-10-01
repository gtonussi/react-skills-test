const reducer = (state = "initial state text", action) => {
  switch (action.type) {
    case "change":
      return state = action.payload;
    default:
      return state;
  }
}

export default reducer;