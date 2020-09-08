import React, { lazy, Suspense, useState } from "react"
import ReactDOM from "react-dom"

// import SideBar from './sidebar'
const SideBar = lazy( () => import( './sidebar' ) )

import './styles.css'

const App = () => {

    const [ sidebarState, setSidebarState ] = useState( false );

    return (
        <div className="main">
        { sidebarState &&
            <Suspense fallback="This is the fallback message">
                <SideBar />
            </Suspense>
        }
        <div>This is the main component</div>
        <button onClick={ () => setSidebarState( ! sidebarState ) }>Show the sidebar</button>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"))