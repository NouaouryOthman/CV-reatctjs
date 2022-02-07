import ContentToggler from '../components/ContentToggler';
import styles from '../components/Gallerie.module.css';
import projet1 from '../resources/projet1.zip';
import capture1 from '../resources/projet1_capture1.png';
import capture2 from '../resources/projet1_capture2.png';
import nodejs from '../resources/nodejs.png';

export default function Projet1() {
    return <div>
        <h2>Projet : Plateforme de réservation des tickets de cinéma</h2>
        <a href={projet1} className="btn center" download="projet1.zip">Télécharger le projet!</a>
        <ContentToggler title="Description du projet" >
            <p>Ce projet représente une plateforme de vente des jeux vidéos avec une description de chaque jeu.</p>
            <p>
                Le projet a été réalisé avec :  NodeJS <img src={nodejs} width="40" height="30"/>
            </p>
        </ContentToggler>


        <div className={styles.gallerie}>
            <img src={capture1} alt="capture 1" key="1" />
            <img src={capture2} alt="capture 2" key="2" />
        </div>
    </div>
}