import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Main.css'
import React, {useEffect, useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft, faCircleNotch} from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'

function App(props) {
    const [TC, setTC] = useState('');
    let treeContent = [];
    let active = 'sideBtnParent ';
    if (props.active)
        active = 'sideBtnParent  ForceActive';
    let tree = '';
    if (props.tree)
        tree = <FontAwesomeIcon icon={faChevronLeft}/>;
    useEffect(() => {
        $(document).on('click', '.ForceActive', function (el) {
            $(this).toggleClass('open');
            $(this).find('ul').slideToggle(100);
        });
        if (props.tree)
            for (let i = 0; i < props.treeContent.length; i++) {
                treeContent.push(<li key={i}><FontAwesomeIcon icon={faCircleNotch}/><a
                    href={props.treeContent[i][1]}>{props.treeContent[i][0]}</a></li>)
                setTC(treeContent);
            }
    }, []);

    return (
        <a href={props.to} className={active}>
            <FontAwesomeIcon icon={props.icon}/>
            <span>{props.show}</span>
            {tree}
            {(props.tree) ? (<ul>{TC}</ul>) : null}
        </a>
    );
}

export default App;
