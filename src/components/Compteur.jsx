import { useState } from 'react';
import styles from './Compteur.module.css';

export default function Compteur() {
    // Création de la variable du nombre
    const [nombre, setNombre] = useState(0);

    // Fonction exécuté quand on clique sur le bouton
    const incrementeNombre = () => {
        // Incrémentation du nombre
        setNombre(nombre + 1);
    }

    return <div className={styles.compteur}>
        <span className={styles.nombre}>{nombre}</span>
        <input type="button" value="Compter" className={styles.bouton} onClick={incrementeNombre} />
    </div>
}