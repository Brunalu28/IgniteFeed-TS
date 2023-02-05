import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=50" />
        <div className={styles.profile}>
            <Avatar src='https://github.com/Brunalu28.png'/>
            <strong>Luiza Bruna</strong>
            <span>Web Developer</span>
        </div>

        <footer>
            <a href="#">
                <PencilLine size={20}/>
                Editar seu perfil
            </a>
        </footer>
        </aside>
    )
}