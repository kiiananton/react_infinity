import React from 'react';
import Personage from './personage';

const PersonageList = (props)=>  {
    const personageList = props.data.map( (element, i) => {
        return(
            <Personage {...element} key = {i}/>
        )})

    return(
        <div className='personage-list'>
            {personageList}
        </div>
    )
}

export default PersonageList;
