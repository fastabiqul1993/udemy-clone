const initialState = {
  wishlist: [],
  range: 0,
  isLoading: false,
  isFullfiled: false,
  isRejected: false
};

const wishlist = (state = initialState, action) => {
  switch (action.type) {
    //GET WISHLIST/////////////////////////////////////////////////////////
    case "GET_WISHLIST_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFullfiled: false
      };
    case "GET_WISHLIST_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_WISHLIST_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isRejected: false,
        isFullfiled: true,
        wishlist: action.payload.data.response,
        range: action.payload.data.countRes
      };

    //POST WISHLIST///////////////////////////////////////////////////
    case "POST_WISHLIST_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFullfiled: false
      };
    case "POST_WISHLIST_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "POST_WISHLIST_FULFILLED":
      // state.wishlist.push(action.payload.config.data);

      return {
        ...state,
        isLoading: false,
        isRejected: false,
        isFullfiled: true,
        wishlist: action.payload.data.response
      };

    //DELETE WISHLIST////////////////////////////////////////////////////////////
    case "DELETE_WISHLIST_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFullfiled: false
      };
    case "DELETE_WISHLIST_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "DELETE_WISHLIST_FULFILLED":
      // const dataAfterDelete = state.wishlist.filter(wish => wish.id != action.payload.config.data.id_course)

      return {
        ...state,
        isLoading: false,
        isRejected: false,
        isFullfiled: true
        // wishlist: dataAfterDelete
      };

    default:
      return state;
  }
};

export default wishlist;
