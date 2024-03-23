import {createSlice, nanoid} from'@reduxjs/toolkit'

const initialState = {
    todos: [
        {
            id: 1,
            text: 'Hello World!'
        }
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) =>{
            const todo = {
                id: nanoid(),
                text: action.payload
            };
            state.todos.push(todo)
        },
        removeTodo: (state, action)=>{
            const id = action.payload
            state.todos=state.todos.filter((e)=>e.id!==id)
        },
        updateTodo: (state, action) =>{
            const id = action.payload.id
            const text = action.payload.text
            state.todos = state.todos.map((e)=>{
                if(e.id===id){
                    e.text = text
                }
            })
        }
    }
})


export const {addTodo,removeTodo,updateTodo} = todoSlice.actions
export default todoSlice.reducer