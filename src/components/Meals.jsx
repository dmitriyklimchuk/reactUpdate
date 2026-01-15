import { useEffect, useState } from "react";

function Meals() {
    const [loadedMeals, setLoadedMeals] = useState([]);

    useEffect(() => {
        async function fetchMeals() {
        const response = await fetch('http://localhost:3000/meals');
        // const response = await fetch('https://jsonplaceholder.typicode.com/users');


        if (!response.ok) {
            
        }

        const meals = await response.json();
        setLoadedMeals(meals);
    }

    fetchMeals();

    }, []);

    // Alternative approach with useCallback
    //
    //

    // useEffect(()=> {
    //     fetchMeals()
    // }, [fetchMeals]);



    //  async function fetchMeals() {
    //     const response = await fetch('http://localhost:3000/meals');

    //     if (!response.ok) {
    //         // error handling
    //     }

    //     const meals = await response.json();
    //     setLoadedMeals(meals);
    // };

    //end Alternative approach with useCallback

    return ( 
        <ul id="meals">
            {loadedMeals.map((meal) => <li key={meal.id}>{meal.name}</li>)}
        </ul>
    );
}


export default Meals;