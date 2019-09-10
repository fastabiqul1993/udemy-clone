const initialState = {
  rating: [],
  isLoading: false,
  isFullfiled: false,
  isRejected: false
};

const Rating = (state = initialState, action) => {
  switch (action.type) {
    case "GET_RATING_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFullfiled: false
      };
    case "GET_RATING_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_RATING_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isRejected: false,
        isFullfiled: true,
        rating: action.payload.data.response
      };
    default:
      return state;
  }
};

export default Rating;
