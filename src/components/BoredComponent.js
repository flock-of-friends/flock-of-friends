import { Link } from 'react-router-dom';
import axios from "axios"
import { useState } from 'react'
import placeholderPic from '../assets/333.jpg'


const BoredComponent = () => {
    const getActivity = (e) => {
        e.preventDefault()
        const options = {
            url: `https://proxy-ugwolsldnq-uc.a.run.app/http://www.boredapi.com/api/activity?type=${userChoice}`,
            method: 'GET',
            dataResponse: 'json'
        };
        axios.request(options)
            .then((response) => {
                setActivities(response.data);
                getPicture(response.data.activity)
            })
    }

    const getPicture = (info) => {
        axios({
            url: 'https://proxy-ugwolsldnq-uc.a.run.app/https://api.unsplash.com/search/photos',
            method: 'GET',
            dataResponse: 'json',
            params: {
                client_id: 'xMApnHMvGsHXF8WNkU53mf3KirR2oQ8ZS6YYr-M-NAU',
                query: info,
                per_page: 1
            }
        }).then((response) => {
            const apiImage = response.data.results[0].urls.thumb;
            setActivityImageAltText(response.data.results[0].alt_description)
            setActivityImage(apiImage)
        })
    }

    //track data from API
    const [activities, setActivities] = useState("");
    //track data of user’s choice of event type
    const [userChoice, setUserChoice] = useState("")
    const [activityImage, setActivityImage] = useState({})
    const [activityImageAltText, setActivityImageAltText] = useState({})
    const [isClicked, setIsClicked] = useState(false);
    const placeHolderImage = placeholderPic
    const handleUserChoice = (e) => {
        setUserChoice(e.target.value);
    }
    const handleOnclick = () => {
        setIsClicked(true)
    }


    return (
        <div className='boredCatalogue'>
            <form action="submit" onSubmit={getActivity}>
                {/* sr-only not working here, need to be figured out later */}
                <select
                    id='choice'
                    onChange={handleUserChoice}
                    value={userChoice}
                >
                    <option value="title" selected>Select Type</option>
                    <option value="education">education</option>
                    <option value="recreational">recreational</option>
                    <option value="social">social</option>
                    <option value="diy">diy</option>
                    <option value="charity">charity</option>
                </select>
                {/* sr-only not working here, need to be figured out later */}
                <button className="activitiesBtn" onClick={handleOnclick}>Click for activities</button>
            </form>
            <div className='boredImg'>
                <p className="activity">{activities.activity}</p>
                {isClicked
                    ? <img src={activityImage} alt={activityImageAltText} />
                    : <img src={placeHolderImage} alt="A cartoon fairground"/>}
                <p className='participants'>Number of participants: {activities.participants}</p>
                <Link to={`/boredForm/${activities.key}`} className="eventBtn">
                    <button >Create event</button>
                </Link>
            </div>
        </div>
    );

}

export default BoredComponent