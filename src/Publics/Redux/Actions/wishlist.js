import Axios from "axios";

export const getWishlist = id_user => {
  return {
    type: "GET_WISHLIST",
    payload: Axios.get(`http://localhost:5000/api/wishlist/${id_user}`)
  };
};

export const postWishlist = (id_user, id_course, course) => {
  return {
    type: "POST_WISHLIST",
    payload: Axios.post(
      `http://localhost:5000/api/wishlist/${id_user}/${id_course}`
      // {
      //   id_user: id_user,
      //   id_course: id_course,
      //   title: course.title,
      //   image: course.image,
      //   price: course.price
      // }
    )
  };
};

//

export const deleteWishlist = (id_user, id_course) => {
  return {
    type: "DELETE_WISHLIST",
    payload: Axios.delete(
      `http://localhost:5000/api/wishlist/${id_user}/${id_course}`
    )
  };
};
