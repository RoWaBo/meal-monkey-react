import axios from "axios";
import { Link } from "@reach/router";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

const TheMeal = () => {
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState();

    useEffect(() => {
        (async function fetchMealCategories() {
            const res = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
            setCategories(res.data.categories)
            setLoading(false)
            console.log(res);              
        })()
    }, []);

    return loading ? <Spinner /> : (
        <> 
        <h3>The meal</h3>
        <div>
            { categories.map(category => {
                return (
                    <Link to={ `/${category.strCategory}` } key={ category.idCategory }>
                        <p>{ category.strCategory }</p>
                        <img src={ category.strCategoryThumb } alt={ category.strCategory } />
                    </Link>
                )
                })
            }    
        </div>
        </>    
     );
}
 
export default TheMeal;