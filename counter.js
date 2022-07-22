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


// step 4: reducer

const counterReducer = (state = counterInitial, action) =>{
        switch(action.type){
            case INCREMENT:
                return{
                    count: state.count + 2
                }
            case DECREMENT :
                return{
                    count: state - 2
                }
            case RESET:
                return{
                    count: 0
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