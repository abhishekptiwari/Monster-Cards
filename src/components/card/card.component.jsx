import React from 'react';
import './card.styles.css'

const size = 180*180;
export const Card  = (props)=>(
    <div className="card-container">
       <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2}`} style={{"width":"200px","height":"180px"}}/>
       <h1 >{props.monster.name}</h1>
       <p>{props.monster.email}</p>
    </div>
)