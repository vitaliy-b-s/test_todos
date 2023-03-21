import styles from './todoList.module.css'
import {mockdata} from "./mockdata";
import deleteImg from '../../assets/images/delete.png';
import editImg from '../../assets/images/edit.png';

export const TodoList = () => {
    return <div className={styles.container}>
        <span>You have something to do...</span>
        <ul className={styles.list}>
            {mockdata.map(item => {
                return <li className={styles.item}>
                    {item.description}
                    {item.date}
                    <div className={styles.image_container}>
                        <img src={deleteImg} alt="delete"/>
                        <img src={editImg} alt="edit"/>
                    </div>

                </li>
            })}
        </ul>
    </div>
}