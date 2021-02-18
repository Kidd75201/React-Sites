import React from "react";
import Product from "./Product";
import productsData from "./vschoolProducts";

function App() {
  const productComponents = productsData.map((item) => (
    <Product key={item.id} product={item} />
  ));
  return <div className="App">{productComponents}</div>;
}

export default App;
