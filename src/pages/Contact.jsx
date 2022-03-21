import { Helmet } from "react-helmet-async"
import FormControl from "../components/FormControl"

export default function Contact() {
    return <>
        <Helmet>
            <title>Formulaires - Démo React</title>
            <meta name="description" content="Présentation de différentes façon d'utiliser les formulaires avec React." />
        </Helmet>

        <h2>Contactez-moi!</h2>
        <FormControl />
    </>
}