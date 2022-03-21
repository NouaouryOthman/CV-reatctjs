import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { StrictMode, lazy } from 'react';
import  Layout  from './pages/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Accueil = lazy(() => import('./pages/Accueil'));
const Projet1 = lazy(() => import('./pages/Projet1'));
const Projet2 = lazy(() => import('./pages/Projet2'));
const Contact = lazy(() => import('./pages/Contact'));
export default function App() {
    return <StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <HelmetProvider>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Accueil />} />
                        <Route path="projet1" element={<Projet1 />} />
                        <Route path="projet2" element={<Projet2 />} />
                        <Route path="contact" element={<Contact />} />
                    </Route>
                </Routes>
            </HelmetProvider>
        </BrowserRouter>
    </StrictMode>
}
