import Meal from '@/components/Meal';
import React from 'react';

const mealsPage = () => {

    return (
        <div className='p-12'>
            <h1 className='text-3xl font-semi-bold text-red-400'>Chosse Your meals </h1>
            <p>Chosse melas of your choice searching.......</p>
              <Meal></Meal>
        </div>
    );
};

export default mealsPage;