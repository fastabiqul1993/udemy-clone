const initialState = {
    cart : [],
    isLoading : false,
    isFulfilled : false,
    isRejected : false
}

const cart = (state = initialState, action) => {
    switch(action.type) {

        // =====================GET========================

        case 'GET_CART_PENDING' :
            return {
                ...state,
                isLoading : true,
                isFulfilled : false,
                isRejected : false
            }
        case 'GET_CART_REJECTED' : 
            return {
                ...state,
                isLoading : false,
                isRejected : true
            }
        case 'GET_CART_FULFILLED' : 
            return {
                ...state,
                isLoading: false,
                isFulfilled :true,
                cart : action.payload.data.response
            }

        // =====================POST========================

        case 'POST_CART_PENDING' :
            return {
                ...state,
                isLoading : true,
                isFulfilled : false,
                isRejected : false
            }
        case 'POST_CART_REJECTED' : 
            return {
                ...state,
                isLoading : false,
                isRejected : true
            }
        case 'POST_CART_FULFILLED' : 
            return {
                ...state,
                isLoading: false,
                isFulfilled :true,
                // cart : action.payload.data.response
            }

        // =====================DELETE========================

        case 'DELETE_CART_PENDING' :
            return {
                ...state,
                isLoading : true,
                isFulfilled : false,
                isRejected : false
            }
        case 'DELETE_CART_REJECTED' : 
            return {
                ...state,
                isLoading : false,
                isRejected : true
            }
        case 'DELETE_CART_FULFILLED' : 
            return {
                ...state,
                isLoading: false,
                isFulfilled :true,
                // cart : action.payload.data.response
            }
            
        default :
            return state
       }
}

export default cart