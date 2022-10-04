import React from 'react';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { features } = option;
    return (
        <div>
            <div className='bg-purple-400 m-3 p-3 rounded-md'>
                <h3>
                    <span className='text-5xl font-bold text-white'>{option.price}</span>
                    <span className='text-2xl text-gray-200'>/mon</span>
                </h3>
                <p className='my-5 text-xl'>{option.name}</p>


                <div>
                    {
                        features.map(feature => <Feature feature={feature}></Feature>)
                    }
                </div>
                <button className='bg-green-500 w-full text-center p-2 rounded-md mt-3'>Buy Now</button>
            </div>
        </div>
    );
};

export default PriceOption;