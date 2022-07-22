const redux = require('redux');
const createStore = redux.createStore

// step 1: state defined
// step 2: action (dispatch action)
// step 3: reducer
// step 4: store (update store)


// step 1:  State 
  /* 
   first we should initial State assign in a variable , 
  it could be  object  assign then under variables ,
  state means data  what data i would  process or worked
  example 

  */
    const initialCounterState = {
        count:0
        // users:[
        //     {name:'kamal'}
        // ]
    }

    const initialUsersState = {
         users:[
                {name:'kamal'}
            ]
    }


// step 2:  action 
/**
 * If i click button then something happen  
 * action means what  am i want to do in my application or my app
 * like INCREMENT COUNTER OR DECREMENT COUNTER
 * 
 * ============= action is a object =============
 *  Two things in action 
 *   1. Type 
 *        example  {type: 'INCREMENT'}
 *   2. payload 
 *     example {payload: 10} 
 *  but we use a function  then  inside function  object return 
 * 
 * 
 */
// Defined constant type declaration
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_USER = "ADD_USER";

const incrementCounterAction = () =>{
  return   {
        type:INCREMENT
    }
}

const decrementCounterAction = ()=>{
    return{
        type:DECREMENT
    }
}
  
const addUserAction = () =>{
    return{
        type:ADD_USER,
        payload:{name:'kamal'}
    }
} 

/**
 * payload used for data sent in reducer
 */


// step 3:  reducer 

/**
 * Reducer is a pure function 
 * what is a pure function 
 * pure function is a function which do not effect other function 
 * or input or get input return same value to process
 * 
 * Reducer work hear base on  action type  
 * write logic in reducer function   
 * reducer function take two parameter 
 *   1. state
 *   2. action
 */

const counterReducer = (state = initialCounterState, action )=>{
    switch(action.type){
        case INCREMENT:
            
        return{
            ...state,
            count: state.count + 1
        }
        
        case DECREMENT:
            return{
                ...state,
                count: state.count -1
            }

        default:
            return state;
    }
}

// step 4: store

/**
 * 
 * store hold our data 
 * store has three main function 
 *  1. getState()  we see the state situation 
 *  2. dispatch()  dispatch our action 
 *  3. subscribe() we subscribe our view 
 */

// create a store 
    const store = createStore( counterReducer );
    store.subscribe(()=>{
        console.log(store.getState());
    })

    // dispatch action 

    // store.dispatch({type:INCREMENT});
    // store.dispatch({type:INCREMENT});
    // store.dispatch({type:INCREMENT});
    // store.dispatch({type:INCREMENT});
     store.dispatch(incrementCounterAction());
     store.dispatch(incrementCounterAction());
     store.dispatch(incrementCounterAction());
     store.dispatch(incrementCounterAction());
     store.dispatch(incrementCounterAction());
     store.dispatch(incrementCounterAction());
     store.dispatch(decrementCounterAction());
     
    // store.dispatch(incrementCounterAction);