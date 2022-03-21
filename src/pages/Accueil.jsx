import Resume from '../components/Resume';
import { Helmet} from 'react-helmet-async';

export default function Accueil() {
    return <div>
        <Helmet>
            <title>
                {'Accueil - Mn CV'} 
            </title>
            <meta name="Accueil" content="Page d'accueil pour démontrer mon CV" />
        </Helmet>
        <Resume />
    </div>
}