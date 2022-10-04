import React from 'react';
import PriceOption from '../PriceOption/PriceOption'

const Pricing = () => {
    const priceOption = [
        { id: 1, name: 'Free', price: 0 },
        { id: 2, name: 'Premium', price: 9.99 },
        { id: 3, name: 'Platinum', price: 19.99 },
    ]
    return (
        <div>
            <h1 className='bg-purple-400 text-white text-5xl font-bold p-10 md:mx-auto md:text-center'>
                Best Pricing Options
            </h1>
            <div className='grid grid-cols-3 gap-6'>
                {
                    priceOption.map(option =>
                        <PriceOption

                            key={option.id}
                            option={option}>

                        </PriceOption>)

                }
            </div>

        </div>
    );
};

export default Pricing;