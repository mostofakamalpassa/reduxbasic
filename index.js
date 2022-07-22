// step 1: state defined
// step 2: action 


// State 
  /* 
   first we should initial State assign in a variable , 
  it could be  object  assign then under variables ,
  state means data  what data i would  process or worked
  example 

  */
    const initialCounterState = {
        count:0,
        // users:[
        //     {name:'kamal'}
        // ]
    }

    const initialUsersState = {
         users:[
                {name:'kamal'}
            ]
    }


// action 
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