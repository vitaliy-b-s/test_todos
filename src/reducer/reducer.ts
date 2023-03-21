import {createReducer} from '@reduxjs/toolkit';
import {ITodoItem} from "../types/Models/TodoItem";
import {addToDo} from "../actions/addTodo";


export interface ToDoState {
    todos?: ITodoItem[] | []
}

export const mainReducer = createReducer<ToDoState>({todos: []}, builder => {
    builder.addCase(addToDo, (state, {payload}) => {
        const arr = [...state.todos as Array<ITodoItem>, payload]
        return {
            ...state,
            todos: arr
        }
    });

});