import React from 'react';

const Personage = (props) => {
    return (
        <div className='personage'  style={{border: '1px solid black', padding: '5px'}}>
            <div>
                Name:{props.name}
            </div>
            <div>
                Image:<img  height= {props.height} src = {props.image} alt=""/>
            </div>

            <div>Types: {props.types.join(', ')}</div>
        </div>
    )
};

export default Personage;