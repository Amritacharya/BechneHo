export default (state = {}, action) => {
  switch (action.type) {
    case "GET_FEATURED":
      return {
        ...state,
        featuredList: action.payload,
      };
    default:
      return { ...state };
  }
};
