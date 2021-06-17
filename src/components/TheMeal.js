import axios from "axios";
import { Link } from "@reach/router";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import SubHeader from "./SubHeader";
import CategoryCard from "./CategoryCard";
import SwipableContainer from "./SwipableContainer";

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
        <SubHeader heading="The meal" actionText="View all"/>
        <SwipableContainer>
            { categories.map(category => {
                return (
                    <Link to={ `/${category.strCategory}` } key={ category.idCategory }>
                        <CategoryCard imageUrl={ category.strCategoryThumb } heading={ category.strCategory }/>
                    </Link>
                )
                })
            }    
        </SwipableContainer>
        </>    
     );
}
 
export default TheMeal;