import {RootState} from "../store/store";
import {createSelector} from "@reduxjs/toolkit";

const selectRoot = (state: RootState) => state;

export const selectTodos = createSelector(
    selectRoot,
    ({todos}) => todos,
);
