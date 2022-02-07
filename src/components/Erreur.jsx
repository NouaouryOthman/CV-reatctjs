import styles from './Erreur.module.css';

export default function Erreur(props) {
    return <span className={styles.erreur}>
        {props.children}
    </span>
}