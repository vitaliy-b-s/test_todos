import {createAction} from '@reduxjs/toolkit';
import {ITodoItem} from "../types/Models/TodoItem";

export const ADD_TODO = 'ADD_TODO';


export const addToDo = createAction(
    ADD_TODO,
    (todo: ITodoItem) => ({payload: todo}),
);