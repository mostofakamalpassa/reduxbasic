const { default: axios } = require("axios");
const { createStore, combineReducers, applyMiddleware } = require("redux");

const thunk = require("redux-thunk").default;

// api url - https://jsonplaceholder.typicode.com/todos

// middleware redux-thunk
// axios api

// step 1: state

const initialTodosState = {
  todos: [],
  isLoading: false,
  error: null,
};

// step 3 : actions
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUSCCESS = "GET_TODOS_SUSCCESS";
const GET_TODOS_ERROR = "GET_TODOS_ERROR";

const getTodoRequestAction = () => {
  return {
    type: GET_TODOS_REQUEST,
  };
};

const getTodosFailed = (error) => {
  return {
    type: GET_TODOS_ERROR,
    payload: error,
  };
};

const getTodosSusccess = (todos) => {
  return {
    type: GET_TODOS_SUSCCESS,
    payload: todos,
  };
};

//step 3: reducer

const todoReducer = (state, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TODOS_SUSCCESS:
      return {
        ...state,
        isLoading: false,
        todos: [state.todos, action.payload],
      };

    case GET_TODOS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

//async action creator

const fetchData = () => {
  return (dispatch) => {
    dispatch(getTodoRequestAction());
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        const data = res.data;
        const title = data.map((todo) => todo.title);
        // console.log(title)

        dispatch(getTodosSusccess(title));
      })
      .catch((err) => {
        const errorMessage = err.message;
        dispatch(getTodosFailed(errorMessage));
      });
  };
};

// step 4: store

const store = createStore(todoReducer, applyMiddleware(thunk));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchData());
