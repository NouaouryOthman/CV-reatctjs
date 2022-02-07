import styles from './Resume.module.css';
import { Card, Button } from 'react-bootstrap';
import webDev from '../resources/web_dev.jpg';
import js from '../resources/js.png';
import java from '../resources/java.png';
import cs from '../resources/c#.png';
import nodejs from '../resources/nodejs.png';
import angular from '../resources/angular.png';
import sqlserver from '../resources/sqlserver.png';
import mysql from '../resources/mysql.png';
import moncv from '../resources/moncv.pdf';

export default function Resume() {
    return <div>
        <div id={styles.header}></div>
        <div className={styles.left}></div>
        <div className={styles.stuff}>
            <Card className="bg-dark text-white">
                <Card.Img src={webDev} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>CV Mohammed-Amine Faris</Card.Title>
                    <Card.Text className="font-weight-bold">
                        Salut! Je suis Mohammed Amine Faris un jeune fraichement diplômé
                        passioné par le développement web
                    </Card.Text>
                    <Card.Body className="center">
                         <img src="logo512.png" width="60" height="60"/> <>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;</>
                         <img src={js} width="60" height="60"/><>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;</>
                         <img src={nodejs} width="80" height="60"/><>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;</>
                         <img src={angular} width="60" height="60" />
                    </Card.Body>
                    <Button variant="primary"><a href={moncv} download="CV_Mohammed_Amine_Faris">Télécharger mon CV!</a></Button>
                </Card.ImgOverlay>
            </Card>
            <p className={styles.head}>Mes intérêts :</p>
            <ul>
                <li>Photographie</li>
                <li>Design</li>
                <li>Programmation</li>
                <li>Développement Web</li>
            </ul>
            <p className={styles.head}>Langages de Programmation :</p>
            <ul>
                <li>Javascript <img src={js} width="30" height="30" /></li>
                <li>C# <img src={cs} width="30" height="30" /></li>
                <li>Java <img src={java} width="20" height="30" /></li>
            </ul>
            <p className={styles.head}>Frameworks et technologies :</p>
            <ul>
                <li>Node JS <img src={nodejs} width="40" height="30" /></li>
                <li>React <img src="logo512.png" width="30" height="30" /></li>
                <li>Angular <img src={angular} width="30" height="30" /></li>
            </ul>
            <p className={styles.head}>Base de données :</p>
            <ul>
                <li>Sql Server <img src={sqlserver} width="40" height="30" /></li>
                <li>MySql <img src={mysql} width="30" height="30" /></li>
            </ul>
            <p className={styles.head}>Education</p>
            <ul>
                <li>Baccalauréat | Les crêtes | Casablanca - Maroc (2017)</li>
                <li>Technicien spécialisé | <a href='https://www.ofppt.ma/' target="_blank" className='link'>OFPPT</a> | Casablanca - Maroc (2019)</li>
                <li>Dec programmation informatique | <a href='https://www.collegelacite.ca/' target="_blank" className='link'>La cité collégiale</a> | Ottawa - Canada (Présent)</li>
            </ul>
            <p className={styles.head}>Expérience :</p>
            <ul>
                <li>Stage en développement web | RichMedia | Casablanca - Maroc (2019)</li>
            </ul>
            <br />
        </div>
        <div className={styles.right}></div>
        <div id={styles.footer}>
            <h2 className={styles.name}>Amine</h2></div>
    </div>

}