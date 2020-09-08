import React from "react"
import DayJS from "react-dayjs"

import iapetus from './iapetus.jpg'

const SideBar = () => {
    return (
        <div className="sidebar">
            <p>Hi I am the sidebar</p>
            <p>The current date is: <DayJS></DayJS></p>
            <img src={ iapetus } />
        </div>
    )
}

export default SideBar