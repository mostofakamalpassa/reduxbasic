// step 1: state

// step 2: action 

// step 3: reducer

// step 4: store

const{createStore} = require('redux');


// state 

const userInitialize = {
    count:1,
    user:['kamal']
}

// step 2: action 
 const ADD_USER = 'ADD_USER';
const addUser = (value) => {
    return{
        type:ADD_USER,
        payload: value
    }
}


// step 3 : Reducer


const addUserReducer = (state = userInitialize, action) =>{

    switch(action.type){

        case ADD_USER:
            return{
              
                user:[...state.user, action.payload],
                count: state.count + 1
            }
        default :
        return state;
    }
}


// step 4: store

const store = createStore(addUserReducer);

store.subscribe(()=>{
    console.log(store.getState())
});


store.dispatch(addUser('jamal'));
store.dispatch(addUser('tomal'));
store.dispatch(addUser('romal'));
store.dispatch(addUser('dumal'));