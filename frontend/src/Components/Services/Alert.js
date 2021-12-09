import React, { useState, useEffect, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import AlertContext from "../../Contexts/AlertContext"

export default function Alert() {

    const [hide, setHide] = useState(false)
    const { alertInfo } = useContext(AlertContext)

    useEffect(() => {
        setHide(!hide)
    }, [alertInfo])

    const handleClose = () => {
        setHide(true)
    }

    return !hide ? (
        <aside className={`alert alert-${alertInfo.type}`}>
            <FontAwesomeIcon className={`alert-icon alert-icon-${alertInfo.type}`} icon={faExclamationCircle} />
            <div className="alert-close" onClick={() => handleClose()} ></div>
            <h4>{alertInfo.title}</h4>
            <p>{alertInfo.message}</p>
        </aside>
    ) : null
}
