import CategoryCard from "./components/CategoryCard";
import SwipableContainer from "./components/SwipableContainer";
import Header from "./components/Header";
import { FaShoppingCart } from "react-icons/fa";
import SubHeader from "./components/SubHeader";
import BigProductCard from "./components/BigProductCard";
import MediumProductCard from "./components/MediumProductCard";
import SmallProductCard from "./components/SmallProductCard";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header userName="Akila!">
          <FaShoppingCart style={{ fontSize: "1.4rem" }} />
        </Header>

        <SwipableContainer>
          <CategoryCard imageUrl="https://source.unsplash.com/featured/?food" heading="Offers" />
          <CategoryCard imageUrl="https://source.unsplash.com/featured/?food,sri,lankan" heading="Sri Lankan" />
          <CategoryCard imageUrl="https://source.unsplash.com/featured/?food,italian" heading="Italian" />
          <CategoryCard imageUrl="https://source.unsplash.com/featured/?food,indonisian" heading="Indonisian" />
        </SwipableContainer>

        <div className="big-products-container" style={{ display: "grid", gap: "1.5rem" }}>
          <SubHeader heading="Popular Restaurents" actionText="View all" />
          <BigProductCard img="https://source.unsplash.com/featured/?pizza" heading="Minute by tuk tuk" store="Café" category="Western Food" />
          <BigProductCard img="https://source.unsplash.com/featured/?brunch" heading="Café de Noir" store="Café" category="Western Food" />
          <BigProductCard img="https://source.unsplash.com/featured/?bakery" heading="Bakes by Tella" store="Café" category="Western Food" />
        </div>

        <SubHeader heading="Most Popular" actionText="View all" />
        <SwipableContainer>
          <MediumProductCard img="https://source.unsplash.com/featured/?pizza_slice" heading="Café De Bambaa" store="Café" category="Western Food" />
          <MediumProductCard img="https://source.unsplash.com/featured/?burger" heading="Burger by Bella" store="Café" category="Western Food" />
        </SwipableContainer>

        <SubHeader heading="Recent Items" actionText="View all" />
        <div className="small-product-container" style={{ display: "grid", gap: "1.5rem" }}>
          <SmallProductCard img="https://source.unsplash.com/featured/?greesy,pizza" heading="Mulberry Pizza by Josh" store="Café" category="Western Food" />
          <SmallProductCard img="https://source.unsplash.com/featured/?coffee,closeup" heading="Barita" store="Café" category="Coffee" />
          <SmallProductCard img="https://source.unsplash.com/featured/?italian,pizza" heading="Pizza Rush Hour" store="Café" category="Italian Food" />
        </div>
        
      </div>
    </>
  );
}

export default App;
