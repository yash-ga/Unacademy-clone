import React from 'react';
import Style from './Track.module.css'


export const TrackItem = ({title,free,test}) => {
    return (
        <div className={Style.slider8}>
            <p>{title}</p>
            <p>{free}</p>
            <p>{ test}</p>
            
        </div>
    )
}
