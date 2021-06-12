import CategoryCard from "./components/CategoryCard";
import SwipableContainer from "./components/SwipableContainer";
import Header from "./components/Welcome-header";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header userName="Akila!" faIconClassName="fas fa-shopping-cart" />
      <SwipableContainer>
        <CategoryCard imageUrl="https://via.placeholder.com/88" heading="Offers"/>
        <CategoryCard imageUrl="https://via.placeholder.com/88" heading="Sri Lankan"/>
        <CategoryCard imageUrl="https://via.placeholder.com/88" heading="Italian"/>
        <CategoryCard imageUrl="https://via.placeholder.com/88" heading="Indonisian"/>
      </SwipableContainer>
      </div>
    </>
  );
}

export default App;
