import React from 'react';

const PriceOption = ({ option }) => {
    return (
        <div className='bg-purple-400 m-3 p-3 rounded-md'>
            <h3>{option.price}</h3>
            <p>{option.name}</p>

        </div>
    );
};

export default PriceOption;