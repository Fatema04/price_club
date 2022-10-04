import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const Feature = ({ feature }) => {
    return (<div>
        <div className='flex'>
            <CheckCircleIcon className='h-4 w-4 text-green-400'></CheckCircleIcon>
            <p className='ml-5'>{feature}</p>

        </div>

    </div>
    );
};

export default Feature;