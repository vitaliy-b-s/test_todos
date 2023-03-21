import {createReducer} from '@reduxjs/toolkit';
import {ITodoItem} from "../types/Models/TodoItem";
import {addToDo} from "../actions/addTodo";
import {deleteTodo} from "../actions/deleteTodo";
import {editTodo} from "../actions/editTodo";
import {initializeApp} from "../actions/initializeApp";


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
    builder.addCase(deleteTodo, (state, {payload}) => {
        const arr = state?.todos?.filter(user => user.id !== payload);
        return {
            ...state,
            todos: arr,
        }
    });
    builder.addCase(editTodo, (state, {payload}) => {
        const arr = [...state.todos as Array<ITodoItem>]
        const index = arr.findIndex(obj => obj.id === payload.itemId);
        if (index !== -1) {
            arr.splice(index, 1, payload.newTodo);
        }
        return {
            ...state,
            todos: arr,
        }
    });
    builder.addCase(initializeApp, (state, {payload}) => {
        return {
            ...state,
            todos: payload
        }
    });

});