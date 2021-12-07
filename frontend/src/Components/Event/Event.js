import React from 'react'

export default function Event({ setHideEvent }) {
    return (
        <aside className='event'>
            <div className="event-close" onClick={() => setHideEvent()} ></div>
            <h2>Cookies caramel</h2>
            <div className='event-info'>
                <p>Date: 13-01-2021</p>
                <p>Created by <strong>Kévin Monsieur</strong></p>
            </div>
            <div className="event-action">
                <button className='event-delete'>Delete</button>
                <button className='event-update'>Update</button>
            </div>
        </aside>
    )
}
