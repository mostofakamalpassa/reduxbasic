
const {createStore} = require('redux');
// step 1: state

const initializeProductState ={
    products :['suger','salt'],
    numberOfProducts: 2
}

// step 2: action 
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';
const getProduct = () => {
    return{
        type:GET_PRODUCTS,
    }
    
}


const setProduct = (product)=>{
    return{
        type:ADD_PRODUCT,
        payload:product
    }
}


// step 3: reducer

const productReducer = (state = initializeProductState, action)=>{
        switch(action.type){
            case GET_PRODUCTS:
                return{
                    ...state,
                    products: state.products
                }

            case ADD_PRODUCT:
                return{
                   // ...state,
                    products:[...state.products, action.payload]
                }
            default:
                break;
        }
}

// step 4: store

const store = createStore(productReducer);

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(setProduct('potato'))
store.dispatch(setProduct('lemon'));
store.dispatch(getProduct())