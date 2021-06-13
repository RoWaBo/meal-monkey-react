import Rating from "./Rating";
import { BsDot } from "react-icons/bs"
import "../scss/medium-product-card.scss"

const MediumProductCard = ({ img, heading, store, category }) => {
    return (
        <section className="medium-product-card">
            <img src={img} alt={category} className="medium-product-card__img" />
            <div className="medium-product-card__text-container">
                <h2 className="medium-product-card__heading">{heading}</h2>
                <div className="medium-product-card__info-container">
                    <p className="medium-product-card__info-text">{store} <BsDot className="medium-product-card__info-icon" /> {category}</p>
                    <Rating iconSize="small" />
                </div>
            </div>
        </section>
    );
}

export default MediumProductCard;