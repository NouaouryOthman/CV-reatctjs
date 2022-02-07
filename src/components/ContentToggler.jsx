import { useState } from 'react';

import styles from './ContentToggler.module.css';

export default function ContentToggler(props) {
    const [visible, setVisible] = useState(props.visible);

    const toggleContent = () => {
        setVisible(!visible);
    }

    return <>
        <div onClick={toggleContent}>
            <svg className={visible ? styles.inverser : ''} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 21l-12-18h24z"/></svg>
            { props.title }
        </div>

        {visible && 
            <div>
                { props.children }
            </div>
        }

        {/*visible ?
            <div>
                { props.children }
            </div>
        :
            null
        */}
    </>
}