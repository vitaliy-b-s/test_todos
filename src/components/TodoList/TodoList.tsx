import styles from './todoList.module.css'
import {mockdata} from "./mockdata";
import deleteImg from '../../assets/images/delete.png';
import editImg from '../../assets/images/edit.png';

export const TodoList = () => {
    return <div className={styles.container}>
        <span className={styles.list_title}>You have something to do here...</span>
        <ul className={styles.list}>
            {mockdata.map(item => {
                return (
                    <li className={styles.item}>
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
    </div>
}