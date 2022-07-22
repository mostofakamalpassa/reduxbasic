const {createStore} = require('redux');

// step 1: state;
// step 2: action 
// step 3: reducer
// step 4: store

// step 1: state 
const counterInitial ={
    count: 0
}


// step 2: action 
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE'
const incrementCounter = () =>{
    return {
        type: INCREMENT
    }
}

const decrementCounter = () =>{
    return {
        type: DECREMENT
    }
}
const resetCounter = () =>{
    return {
        type: RESET
    }
}

const incrementByValue = (value) =>{
    return{
        type:INCREMENT_BY_VALUE,
        payload: value
    }
}


// step 4: reducer

const counterReducer = (state = counterInitial, action) =>{
        switch(action.type){
            case INCREMENT:
                return{
                    ...state,
                    count: state.count + 2
                }
            case DECREMENT :
                return{
                    ...state,
                    count: state - 2
                }
            case RESET:
                return{
                    ...state,
                    count: 0
                }
            case INCREMENT_BY_VALUE:
                return{
                    ...state,
                    count: state.count + action.payload
                }
            default:
                return state;
        }
}


// sept 4: store 

const store = createStore(counterReducer);

// subscribe 
    store.subscribe(()=>{
        console.log(store.getState())
    })

    // dispatch

    store.dispatch(incrementCounter())
    store.dispatch(incrementCounter())
    store.dispatch(incrementCounter())
    store.dispatch(incrementCounter())
    store.dispatch(incrementByValue(10))