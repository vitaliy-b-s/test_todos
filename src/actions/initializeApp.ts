import {createAction} from '@reduxjs/toolkit';
import {ITodoItem} from "../types/Models/TodoItem";

const INITIALIZE_APP = 'INITIALIZE_APP';

export const initializeApp = createAction(
    INITIALIZE_APP,
    (todos: ITodoItem[]) => ({payload: todos}),
);