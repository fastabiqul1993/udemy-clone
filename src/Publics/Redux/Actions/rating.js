import Axios from "axios";

export const getRating = id => {
  return {
    type: "GET_RATING",
    payload: Axios.get(`http://localhost:5000/api/rating/${id}`)
  };
};
