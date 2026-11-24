import ProductCard from "./ProductCard";

function App() {
  return (
    <div>
      <h1>Product List</h1>

      <ProductCard name="Laptop" price="50000" />
      <ProductCard name="Mobile" price="20000" />
      <ProductCard name="Headphones" price="2000" />
      <ProductCard name="Watch" price="3000" />
    </div>
  );
}

export default App;