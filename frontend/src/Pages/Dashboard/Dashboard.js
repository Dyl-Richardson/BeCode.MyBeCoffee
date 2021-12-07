import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Header from "../../Components/Header/Header"
import Calendar from "../../Components/Calendar/Calendar"
import moment from 'moment'

export default function Home() {
    const [hour, setHour] = useState(moment().calendar())

    useEffect(() => {
        changeHour()
    }, [])
    
    const changeHour = () => {
        setHour(moment().calendar())
        setTimeout(() => {
            changeHour()
        }, 3000)
    }

    return (
        <>
            <Header />
            <main className='main-dashboard'>
                <div className="dashboard-attendance">
                    <h1>{hour}</h1>
                    <div className="dashboard-hours">
                        <div>
                            <button className='dashboard-btn-pointed'><FontAwesomeIcon icon={faCheck} />9h00</button>
                            <small>Active from 8h50 to 9h00</small>
                        </div>
                        <div>
                            <button className='dashboard-btn-notpointed '>17h00</button>
                            <small>Active from 17h00 to 21h00</small>
                        </div>
                    </div>
                </div>
                <Calendar />
            </main>
        </>
    )
}
