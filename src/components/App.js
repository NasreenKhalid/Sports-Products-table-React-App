import React from "react";
// import "./styles.css";
import PRODUCTS from "../products";

function ProductCategoryRow(props) {
  const category = props.category;

  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

function ProductRow(props) {
  const product = props.product;
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable(props) {
  const rows = [];
  let lastCategory = null;

  console.log(PRODUCTS);

  PRODUCTS.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar(props) {
  return (
    <div className="container">
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />
          {""}
          Only show products in stock
        </p>
      </form>
    </div>
  );
}

function FilterableSearchBar(props) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={props.PRODUCTS} />
    </div>
  );
}

function App() {
  return (
    <div>
      <FilterableSearchBar products={PRODUCTS} />
    </div>
  );
}

export default App;
