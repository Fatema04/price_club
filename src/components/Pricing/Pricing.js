import React from 'react';

import PriceOption from '../PriceOption/PriceOption'

const Pricing = () => {
    const priceOption = [
        {
            id: 1, name: 'Free', price: 0, features: [
                "Free of cost",
                "Pera nai mama",
                "Take a chill pill"
            ]
        },
        {
            id: 2, name: 'Premium', price: 9.99, features: [
                "Little bit pay",
                "Taka aktu charo mama",
                "Little money"
            ]
        },
        {
            id: 3, name: 'Platinum', price: 19.99, features: [
                "Full of cost",
                "Give me money",
                "No money no service"
            ]
        },
    ]
    return (
        <div>
            <h1 className='bg-purple-400 text-white text-5xl font-bold p-10 md:mx-auto md:text-center'>
                Best Pricing Options
            </h1>
            <div className='grid md:grid-cols-3 gap-6'>
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