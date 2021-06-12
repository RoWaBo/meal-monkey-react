import "../scss/category-card.scss"

const CategoryCard = ({ imageUrl, heading }) => {
    return ( 
        <section className="card">
            <div className="card__img-container">
                <img src={ imageUrl } alt="placeholder" className="card__img" />
            </div>
            <h3 className="card__heading">{ heading }</h3>
        </section>
     );
}
 
export default CategoryCard;