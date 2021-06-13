import Rating from "./Rating";
import { BsDot } from "react-icons/bs"
import "../scss/big-product-card.scss"

const BigProductCard = ({ img, heading, store, category }) => {
    return (
        <section className="big-product-card">
            <img src={img} alt={category} className="big-product-card__img" />
            <div className="big-product-card__text-container">
                <h2 className="big-product-card__heading">{heading}</h2>
                <div className="big-product-card__info-container">
                    <Rating />
                    <p className="big-product-card__info-text">{store} <BsDot className="big-product-card__info-icon" /> {category}</p>
                </div>
            </div>
        </section>
    );
}

export default BigProductCard;