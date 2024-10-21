"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Meal = () => {
    const [search, setSearch] = useState('a');
    const [error, setError] = useState('');
    const [meals, setMeals] = useState([]);

    const loadData = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`);
            const data = await res.json();
            if (data.meals) {
                setMeals(data.meals); // Set meals only if it's not null
                setError("");
            } else {
                setMeals([]); // If no meals, set an empty array
                setError("No Data Found");
            }
        } catch (error) {
            setError("Failed to fetch data");
        }
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        loadData();
    }, [search]);

    return (
        <div className='mt-12'>
            <input 
                onChange={handleSearch}
                className='p-4 outline-border border-transparent text-slate-900 border-red-400 rounded-xl'
                type="text"
                placeholder='Search Meals...' 
            />
            <button 
                onClick={loadData} 
                className='bg-red-400 text-white px-4 py-2 border rounded-md'
            >
                Search
            </button>

            <div className='mt-12 grid grid-cols-3 gap-6'>
                {meals.length > 0 && !error && meals.map((meal) => (
                    <div key={meal.idMeal} className='border-2 p-4'>
                      <Image alt={meal?.strMeal}
                     src={meal?.strMealThumb} height={500} width={500}></Image>
                        <h6>{meal.strMeal}</h6>
                        <p>{meal.strInstructions.substring(0, 100)}...</p> {/* Displaying part of meal description */}
                    </div>
                ))}
                {error && <h6>{error}</h6>}
            </div>
        </div>
    );
};

export default Meal;
