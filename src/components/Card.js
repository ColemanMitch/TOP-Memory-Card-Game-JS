// Card.js

import {React} from 'react'

const Card = (props) => {
    return (
        <div className="team-logo-card" id={props.id} onClick={(e) => props.handleGameLogic(e.target.parentNode.id)}>
            <img className="team-logo" src={props.image} alt={"Logo for the "+props.name}></img>
            <p>{props.name}</p>
        </div>
    );
};

export default Card;