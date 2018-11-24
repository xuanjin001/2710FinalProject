// actions
const FETCH_PRODUCTS   = 'cart/FETCH';

// reducer
export default function products(state = [], action = {}) {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return action.payload;
        default:
            return state;
    }
}

// selectors
export function getProducts(state, props) {
    return state.products;
}

export function getProduct(state, props) {
    return state.products.find(item => item.id === props.id);
}

// action creators
export function fetchProducts(payload) {
    return {
        type: FETCH_PRODUCTS,
        payload: payload
    }
}