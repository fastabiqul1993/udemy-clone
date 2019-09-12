const initialState = {
  cart: [],
  range: 0,
  isInCart: {},
  isLoading: false,
  isFulfilled: false,
  isRejected: false
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    // =====================GET========================

    case "GET_CART_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "GET_CART_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_CART_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        cart: action.payload.data.response,
        range: action.payload.data.countRes
      };

    // =====================POST========================

    case "POST_CART_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "POST_CART_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "POST_CART_FULFILLED":
      state.cart.push(action.payload.data.response.body);
      state.range += 1;
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        cart: state.cart,
        range: state.range
      };

    // =====================DELETE========================

    case "DELETE_CART_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "DELETE_CART_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "DELETE_CART_FULFILLED":
      const dataAfterDelete = state.cart.filter(
        data =>
          data.id_user !== action.payload.data.body.id_user &&
          data.id_course !== action.payload.data.body.id_course
      );
      state.range -= 1;
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        cart: dataAfterDelete,
        range: state.range
      };

    default:
      return state;
  }
};

export default cart;
