const ADD_TODO = "ADD-TODO";
const GET_TODO_BY_ID = " GET_TODO_BY_ID";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";

//Todo를 추가하는 액션크리에이터
export const addTodo = (payload) => {
    return {
        type : ADD_TODO,
        payload,
    };
};

//TODO를 지우는 액션크리에이터
export const deleteTodo = (payload) => {
    return {
        type : DELETE_TODO,
        payload,
    };

};

// TODO를 isDone으로 변경해주는 액션크리에이터
export const toggleStatusTodo = (payload) => {
    return {
        type : TOGGLE_STATUS_TODO,
        payload,
    };
};

//상세페이지에서 특정TODO만 조회시켜주는
export const getTodoByID = (payload) => {
    return {
        type : GET_TODO_BY_ID,
        payload,
    };
};


const initialState = {
    todos: [
    {
        id : 0,
        title : "리액트",
        body: "리액트를 배워봅시다",
        isDone : false,
    },
    ],
    todo : {
        id : 0,
        title : "",
        body: "",
        isDone : false,

    }
   

};

const todos = (state = initialState,action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos :[...state.todos,action.payload],
            };

    case DELETE_TODO :
        return {
            ...state,
            todos :state.todos.filter((todo)=>todo.id === action.payload),
        };


    case TOGGLE_STATUS_TODO : 
    return {
        ...state,
        todos : state.todos.map((todo)=> {
            if(todo.id === action.payload){
                return {
                    ...todo,
                    isDone:!todo.isDone,
                };
            } else{
                return todo;
            }
        }),
    };

    case GET_TODO_BY_ID:
        return {
            ...state,
            todo : state.todos.find((todo) => {
                return todo.id == action.payload;
            }),
        };
        default:
            return state;
    }
};

export default todos;
