import styles from './Gallerie.module.css';

export default function Gallerie(props) {
    return <div className={styles.gallerie}>
        {props.images.map((element, index) => 
            <img src={element.src} alt={element.alt} key={index} />
        )}
    </div>
}
