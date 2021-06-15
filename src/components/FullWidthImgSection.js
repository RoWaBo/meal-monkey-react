
import "../scss/big-product-card.scss"

const BigProductCard = ({ img, heading, alt, children }) => {
    return (
        <section className="big-product-card">
            <img src={img} alt={alt} className="big-product-card__img" />
            <div className="big-product-card__text-container">
                <h2 className="big-product-card__heading">{heading}</h2>
                <div className="big-product-card__description">
                    { children }    
                </div>
            </div>
        </section>
    );
}

export default BigProductCard;