import styles from './todoList.module.css'
import {mockdata} from "./mockdata";
import deleteImg from '../../assets/images/delete.png';
import editImg from '../../assets/images/edit.png';
import {Button, Input, Modal} from 'antd';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addToDo} from "../../actions/addTodo";

export const TodoList = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [todoText, setTodoText] = useState<string>('')
    const [isEdit, setIsEdit] = useState<boolean>(false)

    const dispatch = useDispatch();

    const handleModalOpen = () => {
        setIsEdit(false);
        setIsModalOpen(true)
    }

    const handleAddModal = () => {
        const newTodo = {
            id: `${todoText}_${new Date().toISOString()}`,
            date: new Date().toISOString(),
            description: todoText,
        }

        dispatch(addToDo(newTodo));
        setIsModalOpen(false)
    }

    return <div className={styles.container}>
        <span className={styles.list_title}>You have something to do here...</span>
        <ul className={styles.list}>
            {mockdata.map(item => {
                return (
                    <li className={styles.item} key={item.id}>
                        <div className={styles.flex_column}>
                            {item.description}
                            <span className={styles.date_description}>Last modified:{item.date} </span>
                        </div>
                        <div className={styles.image_container}>
                            <img className={styles.icon_img} src={deleteImg} alt="delete"/>
                            <img className={styles.icon_img} src={editImg} alt="edit"/>
                        </div>

                    </li>)
            })}
        </ul>
        <Modal
            title={isEdit ? "Edit todo" : "Add todo"}
            open={isModalOpen}
            onCancel={() => setIsModalOpen(false)}
            onOk={handleAddModal}
        >
            <span>{isEdit ? "Please edit todo" : "Please add todo"}</span>
            <Input value={todoText} onChange={(e) => setTodoText(e.target.value)}/>
        </Modal>
        <Button type="primary" onClick={handleModalOpen} className={styles.add_button}>+</Button>
    </div>
}