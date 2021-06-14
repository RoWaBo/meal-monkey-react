import Rating from "./Rating";
import { BsDot } from "react-icons/bs"
import "../scss/small-product-card.scss"

const SmallProductCard = ({ img, heading, store, category }) => {
    return (
        <section className="small-product-card">
            <img src={img} alt={category} className="small-product-card__img" />
            <div className="small-product-card__text-container">
                <h2 className="small-product-card__heading">{heading}</h2>
                <div className="small-product-card__info-container">
                    <p className="small-product-card__info-text">{store} <BsDot className="small-product-card__info-icon" /> {category}</p>
                    <Rating iconSize="small" />
                </div>
            </div>
        </section>
    );
}

export default SmallProductCard; 