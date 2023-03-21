import {createAction} from '@reduxjs/toolkit';

const DELETE_TODO = 'DELETE_TODO';

export const deleteTodo = createAction(
    DELETE_TODO,
    (itemId: string) => ({payload: itemId}),
);