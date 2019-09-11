import Axios from 'axios'

export const getCart = id_user => {
    return{
        type : 'GET_CART',
        payload : Axios.get(`http://localhost:5000/api/cart/${id_user}`)
    }
}

export const postCart = (id_user, id_course) => {
    return {
        type: 'POST_CART',
        payload: Axios.post(`http://localhost:5000/api/cart/${id_user}/${id_course}`)
    }
}

export const deleteCart = (id_user, id_course) => {
    return {
        type : 'DELETE_CART',
        payload : Axios.delete(`http://localhost:5000/api/cart/${id_user}/${id_course}`)
    }
}

