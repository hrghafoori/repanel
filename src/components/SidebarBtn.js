import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Main.css'
import React, {useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'



function App(props) {
    useEffect(() => {

    }, []);

    return (
        <a target={props.tar} href={props.to} className='sideBtnParent'>
            <FontAwesomeIcon icon={props.icon}/>
            <span>{props.show}</span>
        </a>
    );
}

export default App;
