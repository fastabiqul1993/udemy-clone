import Axios from "axios";

export const getAllCourses = () => {
  return {
    type: "GET_ALL_COURSES",
    payload: Axios.get("http://localhost:5000/api/courses")
  };
};

export const getCourses = id => {
  return {
    type: "GET_COURSES",
    payload: Axios.get(`http://localhost:5000/api/courses/${id}`)
  };
};
