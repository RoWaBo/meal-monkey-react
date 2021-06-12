
const CategoryCard = ({ heading }) => {
    return ( 
        <section className="card">
            <div className="card__img-container">
                <img src="https://via.placeholder.com/88" alt="placeholder image" className="card__img" />
            </div>
            <div className="card__heading-container">
                <h3 className="card__heading">{ heading }</h3>
            </div>
        </section>
     );
}
 
export default CategoryCard;