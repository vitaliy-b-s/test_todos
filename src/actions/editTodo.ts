import {createAction} from '@reduxjs/toolkit';
import {ITodoItem} from "../types/Models/TodoItem";

const EDIT_TODO = 'EDIT_TODO';

export const editTodo = createAction(
    EDIT_TODO,
    (itemId: string, newTodo: ITodoItem) => ({
        payload: {
            itemId, newTodo
        }
    }),
);