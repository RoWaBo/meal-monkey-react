import axios from "axios";
import { useEffect } from "react";

const Meals = ({ category }) => {

    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
            .then(res => console.log(res))
    }, [category]);

    return ( 
        <>
            <h1>{ category }</h1>
        </>
     );
}
 
export default Meals;