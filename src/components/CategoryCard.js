import "../scss/category-card.scss"

const CategoryCard = ({ imageUrl, heading }) => {
    return ( 
        <section className="card">
            <img src={ imageUrl } alt={ `placeholder of ${heading}` } className="card__img" />
            <h3 className="card__heading">{ heading }</h3>
        </section>
     );
}
 
export default CategoryCard;