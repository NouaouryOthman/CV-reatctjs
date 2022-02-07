import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accueil from './pages/Accueil';
import Projet1 from './pages/Projet1';
import Projet2 from './pages/Projet2';
import { useState } from 'react';

import './App.css';

export default function App() {
    const [pageCourante, setPageCourante] = useState('accueil');

    const changePage = (page) => {
        return () => {
            setPageCourante(page);
        }
    }

    return <>
        <Header changePage={changePage} />

        {pageCourante === 'accueil' &&
            <Accueil />
        }
        
        {pageCourante === 'projet1' &&
            <Projet1 />
        }
        
        {pageCourante === 'projet2' &&
            <Projet2 />
        }

        {/*footer*/}
    </>
}
