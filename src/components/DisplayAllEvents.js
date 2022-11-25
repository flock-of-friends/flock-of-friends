import {  Link, Outlet } from 'react-router-dom'

const DisplayAllEvents = () => {
    // Users enter this page
    // They are greeted with a list of events other users have created.
    // users can click to open the items displayed and can see events.
    return(
        <section className='allEventsSection'>
            <main>
            <h2 className='allEventsHeading'>Check out events people have made</h2>
            <div className="allEventsButtons">
            <Link to='/displayAllEvents/displayAllTmEvents'>
                <button>💰</button>
            </Link>
            <Link to='/displayAllEvents/displayAllBoredEvents'>
                <button>🆓</button>
            </Link></div>
            <Outlet />
            </main>
        </section>
    )
}

export default DisplayAllEvents