import React from 'react';

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

        </div>
    );
};

export default Pricing;