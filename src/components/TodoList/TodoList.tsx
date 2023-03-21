import styles from './todoList.module.css'
import {Button, Input, Modal} from 'antd';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addToDo} from "../../actions/addTodo";
import {selectTodos} from "../../selectors/selectTodos";
import {formatDate} from "../../helpers/date/formatDate";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {deleteTodo} from "../../actions/deleteTodo";
import {ITodoItem} from "../../types/Models/TodoItem";
import {editTodo} from "../../actions/editTodo";
import {localStorageTodosKey} from "../../constants/localStorage";
import {initializeApp} from "../../actions/initializeApp";

export const TodoList = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [todoText, setTodoText] = useState<string>('')
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const [idToEdit, setIdToEdit] = useState<string>('')

    const dispatch = useDispatch();

    const todos = useSelector(selectTodos);

    useEffect(() => {
        if (todos && todos?.length > 0) {
            localStorage.setItem(localStorageTodosKey, JSON.stringify(todos));
        }
    }, [todos, dispatch])

    useEffect(() => {
        const todos = localStorage.getItem(localStorageTodosKey);
        if (todos) {
            const initialValue = JSON.parse(todos);
            dispatch(initializeApp(initialValue))
        }
    }, [dispatch])


    const handleModalOpen = () => {
        setIsEdit(false);
        setIsModalOpen(true)
    }

    const handleAddTodo = () => {
        const newTodo = {
            id: `${todoText}_${new Date().toISOString()}`,
            date: formatDate(new Date()),
            description: todoText,
        }

        dispatch(addToDo(newTodo));
        setTodoText("");
        setIsModalOpen(false)
    }

    const handleEditTodo = () => {
        const newTodo = {
            id: `${todoText}_${new Date().toISOString()}`,
            date: formatDate(new Date()),
            description: todoText,
        }
        dispatch(editTodo(idToEdit, newTodo))
        setTodoText("");
        setIsModalOpen(false)
    }

    const handleDeleteIcon = (itemId: string) => {
        dispatch(deleteTodo(itemId))
    }

    const onEditIconClick = (item: ITodoItem) => {
        setIsEdit(true);
        setTodoText(item.description)
        setIsModalOpen(true)
        setIdToEdit(item.id)
    }


    return <div className={styles.container}>
        <span className={styles.list_title}>You have something to do here...</span>
        {!!todos?.length && <ul className={styles.list}>
            {todos?.map(item => {
                return (
                    <li className={styles.item} key={item.id}>
                        <div className={styles.flex_column}>
                            {item.description}
                            <span className={styles.date_description}>Last modified:{item.date} </span>
                        </div>
                        <div className={styles.image_container}>
                            <EditOutlined
                                className={styles.icon_img}
                                onClick={() => onEditIconClick(item)}

                            />
                            <DeleteOutlined
                                className={styles.icon_img}
                                onClick={() => handleDeleteIcon(item.id)}
                            />
                        </div>

                    </li>)
            })}
        </ul>}
        <Modal
            title={isEdit ? "Edit todo" : "Add todo"}
            open={isModalOpen}
            onCancel={() => setIsModalOpen(false)}
            onOk={() => {
                isEdit ? handleEditTodo() : handleAddTodo()
            }
            }
        >
            <span>{isEdit ? "Please edit todo" : "Please add todo"}</span>
            <Input value={todoText} onChange={(e) => setTodoText(e.target.value)}/>
        </Modal>
        <Button
            type="primary"
            onClick={handleModalOpen}
            className={styles.add_button}>
            +
        </Button>
    </div>
}