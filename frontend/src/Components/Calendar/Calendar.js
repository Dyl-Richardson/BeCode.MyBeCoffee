import Reac, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import Event from '../Event/Event'
import moment from 'moment'

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

export default function Calendar() {

    const [monthNumber, setMonthNumber] = useState(moment().month())
    const [month, setMonth] = useState(months[monthNumber])
    const [year, setYear] = useState(new Date().getFullYear())
    const [countDays, setCountDays] = useState()
    const [hideEvent, setHideEvent] = useState(false)

    useEffect(() => {
        let count = monthNumber % 2 === 0 ? 30 : 31
        count = monthNumber === 1 ? bissextile(new Date().getFullYear()) : count

        setCountDays(count)
    }, [month])

    const bissextile = (year) => {
        if ((year % 4 === 0 && year % 100 > 0) || (year % 400 === 0)) {
            return 28
        } else {
            return 29
        }
    }

    const handleClickEvent = () => {
        setHideEvent(true)
    }

    const handleChangeMonth = (choice) => {
        let _monthNumber = monthNumber
        let _year = year

        if (choice === 0) { // Back
            if (_monthNumber === 0) { // Last year
                _monthNumber = 11
                _year--
            } else {
               _monthNumber--
            }
        } else if (choice === 1) { // Next
            if (_monthNumber === 11) { // Next year
                _monthNumber = 0
                _year++
            } else {
                _monthNumber++
            }
        }
        setYear(_year)
        setMonth(months[_monthNumber])
        setMonthNumber(_monthNumber)
    }

    const createDays = () => {
        const container = []
        for (let i = 0; i < countDays; i++) {
            container.push(
                <li className='calender-day'>
                    <p>{i + 1}</p>
                    <div className="calender-event" onClick={() => handleClickEvent()}>
                        <p>Kevin Monsieur</p>
                    </div>
                </li>
            )
        }
        return container
    }

    return (
       <div className='calendar'>
           {hideEvent ? <Event setHideEvent={() => setHideEvent(false)} /> : null}
           <div className='calendar-months'>
                <button onClick={() => handleChangeMonth(0)}><FontAwesomeIcon icon={faChevronLeft} /></button>
                <p>{month} {year}</p>
                <button onClick={() => handleChangeMonth(1)}><FontAwesomeIcon icon={faChevronRight} /></button>
           </div>
           <ul className="calendar-days">
              {createDays()}
           </ul>
       </div>
    )
}
