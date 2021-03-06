import { Router } from "@reach/router"
// import CategoryCard from "./components/CategoryCard";
import SwipableContainer from "./components/SwipableContainer";
import Header from "./components/Header";
import { FaShoppingCart } from "react-icons/fa";
import SubHeader from "./components/SubHeader";
import FullWidthImgSection from "./components/FullWidthImgSection";
import MediumProductCard from "./components/MediumProductCard";
import SmallProductCard from "./components/SmallProductCard";
import Rating from "./components/Rating";
import ExtraInfo from "./components/ExtraInfo";
import Counter from "./components/Counter";
import TheMeal from "./components/TheMeal";
import Meals from "./components/Meals";
import Styled from "./components/Style";
import BigCategoryCard from "./components/BigCategoryCard";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  background-color: black;
`

function App() {
  return (
    <>
      <GlobalStyle />
        <div className="wrapper">

          <Header userName="Akila!">
            <FaShoppingCart style={{ fontSize: "1.4rem" }} />
          </Header>

          {/* <SwipableContainer>
          <CategoryCard imageUrl="https://source.unsplash.com/featured/?food" heading="Offers" />
          <CategoryCard imageUrl="https://source.unsplash.com/featured/?food,sri,lankan" heading="Sri Lankan" />
          <CategoryCard imageUrl="https://source.unsplash.com/featured/?food,italian" heading="Italian" />
          <CategoryCard imageUrl="https://source.unsplash.com/featured/?food,indonisian" heading="Indonisian" />
          </SwipableContainer> */}

          <Router>
            <TheMeal path="/" />
            <Styled path="styled" />
            <Meals path="/:category" />
          </Router>

          <BigCategoryCard imgUrl="https://source.unsplash.com/featured/?food" imgForm="circle" heading="Food" description="120 Items" />
          <BigCategoryCard imgUrl="https://source.unsplash.com/featured/?coffee,cup" heading="Beverages" description="220 Items" />

          <div className="big-products-container" style={{ display: "flex", gap: "1.5rem", flexDirection: "column" }}>
            <SubHeader heading="Popular Restaurents" actionText="View all" />
            <FullWidthImgSection img="https://source.unsplash.com/featured/?pizza" alt="pizza" heading="Minute by tuk tuk">
              <Rating />
              <ExtraInfo contentArray={["Caf??", "Western Food"]} />
            </FullWidthImgSection>
            <FullWidthImgSection img="https://source.unsplash.com/featured/?brunch" alt="brunch" heading="Caf?? de Noir">
              <Rating />
              <ExtraInfo contentArray={["Caf??", "Western Food"]} />
            </FullWidthImgSection>
            <FullWidthImgSection img="https://source.unsplash.com/featured/?bakery" alt="bakery" heading="Bakes by Tella">
              <Rating />
              <ExtraInfo contentArray={["Caf??", "Western Food"]} />
            </FullWidthImgSection>
          </div>

          <SubHeader heading="Most Popular" actionText="View all" />
          <SwipableContainer>
            <MediumProductCard img="https://source.unsplash.com/featured/?pizza_slice" heading="Caf?? De Bambaa" store="Caf??" category="Western Food" />
            <MediumProductCard img="https://source.unsplash.com/featured/?burger" heading="Burger by Bella" store="Caf??" category="Western Food" />
          </SwipableContainer>

          <SubHeader heading="Recent Items" actionText="View all" />
          <div className="small-product-container" style={{ display: "grid", gap: "1.5rem" }}>
            <SmallProductCard img="https://source.unsplash.com/featured/?greesy,pizza" heading="Mulberry Pizza by Josh" store="Caf??" category="Western Food" />
            <SmallProductCard img="https://source.unsplash.com/featured/?coffee,closeup" heading="Barita" store="Caf??" category="Coffee" />
            <SmallProductCard img="https://source.unsplash.com/featured/?italian,pizza" heading="Pizza Rush Hour" store="Caf??" category="Italian Food" />
          </div>

          <Counter />

        </div>
    </>
  );
}

export default App;
