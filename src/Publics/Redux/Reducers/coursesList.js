import { stat } from "fs";

const initialState = {
  coursesList: [],
  isLoading: false,
  isFullfiled: false,
  isRejected: false
};

const coursesList = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_COURSES_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFullfiled: false
      };
    case "GET_ALL_COURSES_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_ALL_COURSES_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isRejected: false,
        isFullfiled: true,
        coursesList: action.payload.data.response
      };
    case "GET_COURSES_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFullfiled: false
      };
    case "GET_COURSES_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_COURSES_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isRejected: false,
        isFullfiled: true,
        coursesList: action.payload.data.response
      };
    default:
      return state;
  }
};

export default coursesList;
