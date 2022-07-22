
const {createStore, combineReducers} = require('redux');
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
                   // ...state,
                    //products: state.products,
                    
                }

            case ADD_PRODUCT:
                return{
                   // ...state,
                    products:[...state.products, action.payload]
                }
            default:
              return  state;
        }
}

// step 4: store

// const store = createStore(productReducer);

// store.subscribe(()=>{
//     console.log(store.getState())
// })

// store.dispatch(setProduct('potato'))
// store.dispatch(setProduct('lemon'));
// store.dispatch(getProduct())



// cart 

// step 1: state

const initalizeCartItem ={
    products:[],
    count:0
}


// step 2: action 

const GET_CART_ITEM = 'GET_CART_ITEM';
const SET_CART_ITEM = 'SET_CART_ITEM';
const getCartItem = ()=>{
    return{
        type:GET_CART_ITEM
    }
}

const setCartItem = (product)=>{
    return{
        type:SET_CART_ITEM,
        payload:product
    }
}


const cartReducer = (state = initalizeCartItem, action) =>{

    switch(action.type){

        case GET_CART_ITEM:
            return{
                state
            }

        case SET_CART_ITEM:
            return{
              //  ...state,
                products:[...state.products, action.payload],
                count : state.count + 1
            }
        default:
            return state
    }
}

// Multiple Reducer 
const rootReducer = combineReducers({
    productRe: productReducer,
    cartItemRe: cartReducer

})
// const store = createStore(cartReducer);
const store = createStore(rootReducer);

store.subscribe(()=>{
    console.log(store.getState())
})
// store.dispatch(productReducer('potato'))
store.dispatch(setCartItem('potato'))
store.dispatch(setCartItem('lemon'));
store.dispatch(getCartItem())