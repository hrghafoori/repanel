import '../styles/Main.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import SidebarBtn from '../components/SidebarBtn'
import $ from 'jquery';
import React, {useState, useEffect} from 'react';
import {faTachometerAlt} from '@fortawesome/free-solid-svg-icons'

function App() {
    useEffect(() => {

    }, []);

    return (
        <div className='sideContainer'>
            <div className='sideChild'>
                <SidebarBtn
                    // to='http://google.com'
                    active
                    tree
                    icon={faTachometerAlt}
                    show='داشبورد'
                    treeContent={[
                        ['لینک اول', 'http://me.ir'],
                        ['وسط لینک الان', 'http://he.ir'],
                        ['دوباره اخری', 'http://you.ir']
                    ]}/>
                {/*<SidebarBtn*/}
                {/*    to='http://google.com'*/}
                {/*    tree*/}
                {/*    icon={faTachometerAlt}*/}
                {/*    show='داشبورد'*/}
                {/*    treeContent={[*/}
                {/*        ['لینک اول', 'http://me.ir'],*/}
                {/*        ['وسط لینک الان', 'http://he.ir'],*/}
                {/*        ['دوباره اخری', 'http://you.ir']*/}
                {/*    ]}/>*/}
                {/*<SidebarBtn*/}
                {/*    to='http://google.com'*/}
                {/*    icon={faTachometerAlt}*/}
                {/*    show='داشبورد'/>*/}
            </div>
        </div>
    );
}

export default App;
