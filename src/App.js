import CategoryCard from "./components/CategoryCard";
import SwipableContainer from "./components/SwipableContainer";
import Header from "./components/Header";
import { FaShoppingCart } from "react-icons/fa";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header userName="Akila!" actionText="">
            <FaShoppingCart style={{ fontSize:"1.2rem" }} />  
        </Header>
      <SwipableContainer>
        <CategoryCard imageUrl="https://source.unsplash.com/featured/?food" heading="Offers"/>
        <CategoryCard imageUrl="https://source.unsplash.com/featured/?food,sri_lankan" heading="Sri Lankan"/>
        <CategoryCard imageUrl="https://source.unsplash.com/featured/?food,italian" heading="Italian"/>
        <CategoryCard imageUrl="https://source.unsplash.com/featured/?food,indonisian" heading="Indonisian"/>
      </SwipableContainer>
      </div>
    </>
  );
}

export default App;
