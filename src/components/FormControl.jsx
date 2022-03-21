import { useState } from 'react';
import emailValidator from 'email-validator';

import styles from './Form.module.css';

export default function FormControl() {
    const [courrielValeur, setCourrielValeur] = useState('');
    const [mailValeur, setMailValeur] = useState('');
    const [courrielTouched, setCourrielTouched] = useState(false);
    const handleCourrielChange = (event) => {
        setCourrielValeur(event.currentTarget.value);
        setCourrielTouched(true);
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        if (courrielValeur !== '' && emailValidator.validate(courrielValeur)) {
            console.log(courrielValeur);
            console.log(mailValeur);
            setCourrielValeur('');
            setCourrielTouched(false);
        }
    }

    return <form noValidate className={styles.form} onSubmit={handleSubmit}>
        <label>
            Adresse courriel:
            <input type="email" value={courrielValeur} onChange={handleCourrielChange} />
        </label>
        {courrielTouched && courrielValeur === '' &&
            <div className={styles.erreur}>
                L'adresse courriel n'est pas spécifié.
            </div>
        }
        {courrielTouched && !emailValidator.validate(courrielValeur) &&
            <div className={styles.erreur}>
                L'adresse courriel n'est pas valide.
            </div>
        }
        <label>
            <input type="text" value={mailValeur} onChange={handleCourrielChange} />
        </label>



        <input type="submit" />

        <div>{courrielValeur}</div>
    </form>
}