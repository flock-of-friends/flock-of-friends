import { getDatabase, onValue, ref, } from 'firebase/database'
import { useState, useEffect } from 'react'
import app from '../firebase'

const DisplayAllTmEvents = () => {
    const [tmEvents, setTmEvents] = useState([])

    useEffect(() => {
        const database = getDatabase(app)
        const dbRefTm = ref(database, "/tm")
        onValue(dbRefTm, (response) =>{
            const tmArray = []
            const dataTm = response.val();
            for(let key in dataTm){
                tmArray.unshift({key:key, name:dataTm[key]})
            }
            setTmEvents(tmArray)
        })
        
    },[])

    const tmURL =  "/tmcard/"
    // console.log(tmURL)

    return(
        <div className='eventListContainer'>
            {/* <h3>Idea's we helped locate</h3> */}
            <ul>
                {
                  tmEvents.map((event) =>{
                    // console.log(event)
                    return(
                        <div className="allEventsCard">
                            <li key={event.key}>
                            <p>{event.name.event}</p>
                            <a className='inviteLink' href={`${tmURL}${event.key}` }>
                               Learn more
                            </a>
                        </li>
                        </div>
                    )
                  })  
                }
                
            </ul>
        </div>
    )
}

export default DisplayAllTmEvents