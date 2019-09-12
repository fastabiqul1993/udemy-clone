import Axios from "axios";

export const getAllCourses = () => {
  return {
    type: "GET_ALL_COURSES",
    payload: Axios.get("http://localhost:5000/api/courses")
  };
};

export const getCourses = id => {
  // console.log("masukk");
  return {
    type: "GET_COURSES",
    payload: Axios.get(`http://localhost:5000/api/courses/${id}`)
  };
};

export const getCoursesPage = (offset, limit) => {
  return {
    type: "GET_COURSES_PAGE",
    payload: Axios.get(`http://localhost:5000/api/courses/${offset}/${limit}`)
  };
};
