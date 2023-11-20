import { PlusCircle } from 'phosphor-react';
import styles from './Search.module.css';

export function Search () {
    return (
        <article className={styles.search}>
            <input placeholder="Adicione uma nova tarefa" type="text" />
            <button type='submit'>
                Criar
                <PlusCircle />
            </button>
        </article>
    )
}