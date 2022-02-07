import ContentToggler from '../components/ContentToggler';
import spring from '../resources/spring_boot.png';
import styles from '../components/Gallerie.module.css';
import projet2 from '../resources/projet2.zip';
import capture1 from '../resources/projet2_capture1.png';
import angular from '../resources/angular.png';

export default function Projet2() {
    return <div>
        <h2>Projet : Plateforme des jeux vidéos</h2>
        <a href={projet2} className="btn center" download="projet2.zip">Télécharger le projet!</a>
        <ContentToggler title="Description du projet" >
            <p>Ce projet représente une plateforme de réservation des tickets de cinéme dans différentes salle de cinéma
                dans différentes villes du Maroc.</p>
            <p>
                Le projet a été réalisé avec :  Angular <img src={angular} width="40" height="30"/> & Spring Boot <img src={spring} width="50" height="30"/>
            </p>
        </ContentToggler>

        <div className={styles.gallerie}>
            <img src={capture1} alt="capture 1" key="1" />
        </div>
    </div>
}