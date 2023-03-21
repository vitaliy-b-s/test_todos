import React, {useEffect} from 'react';
import {TodoList} from "./components/TodoList/TodoList";
import {localStorageTodosKey} from "./constants/localStorage";
import {useDispatch} from "react-redux";
import {initializeApp} from "./actions/initializeApp";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const todos = localStorage.getItem(localStorageTodosKey);
        if (todos) {
            const initialValue = JSON.parse(todos);
            dispatch(initializeApp(initialValue))
        }
    }, [dispatch])

    return (
        <div className="App">
            <TodoList/>
        </div>
    );
}

export default App;
