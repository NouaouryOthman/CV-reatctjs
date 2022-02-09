import ContentToggler from '../components/ContentToggler';
import styles from '../components/Gallerie.module.css';
import projet1 from '../resources/projet1.zip';
import capture1 from '../resources/projet1_capture1.png';
import spring from '../resources/spring_boot.png';

export default function Projet1() {
    return <div>
        <h2>Projet : Plateforme de réservation des tickets de cinéma</h2>
        <a href={projet1} className="btn center" download="projet1.zip">Télécharger le projet!</a>
        <ContentToggler title="Description du projet" >
            <p>Ce projet représente une application web pour faire une analyse des sentiments sur des pages Faccebook 
                à partir de leurs commentaires.</p>
            <p>
                Le projet a été réalisé avec :  Spring boot <img src={spring} width="40" height="30"/>
            </p>
        </ContentToggler>


        <div className={styles.gallerie}>
            <img src={capture1} alt="capture 1" key="1" />
        </div>
    </div>
}