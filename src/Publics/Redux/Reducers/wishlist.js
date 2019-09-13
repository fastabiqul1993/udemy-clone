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
      state.wishlist.push(action.payload.data.response.body);
      state.range += 1;
      return {
        ...state,
        isLoading: false,
        isRejected: false,
        isFullfiled: true,
        wishlist: state.wishlist,
        range: state.range
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
      // const dataAfterDelete = state.cart.filter(
      //   data =>
      //     data.id_user !== action.payload.data.body.id_user &&
      //     data.id_course !== action.payload.data.body.id_course
      // );
      state.range -= 1;
      return {
        ...state,
        isLoading: false,
        isRejected: false,
        isFullfiled: true,
        range: state.range
      };

    default:
      return state;
  }
};

export default wishlist;
