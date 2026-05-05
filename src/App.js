import { useState, useEffect } from "react";
import Header from "./Header";
import Form from "./Form";
import ShoppingList from "./ShoppingList";
import Footer from "./Footer";

export default function App() {
  const [products, setProducts] = useState(() => {
    try {
      const stored = localStorage.getItem("products");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [filter, setFilter] = useState("all");

  // ✅ Save to localStorage
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  function handleAddProducts(product) {
    setProducts((prevProduct) => [...prevProduct, product]);
    console.log(product);
  }

  function handleToggleProduct(id) {
    setProducts((products) =>
      products.map((product) =>
        product.id === id ? { ...product, bought: !product.bought } : product,
      ),
    );
  }

  function handleDeleteProduct(id) {
    setProducts((products) => products.filter((product) => product.id !== id));
  }

  function handleClearProducts() {
    const confirmed = window.confirm(
      "Are you sure you want ot delete all item?",
    );
    if (confirmed) setProducts([]);
  }

  // ✅ Filtering logic
  const filteredProducts = products.filter((p) =>
    filter === "all" ? true : filter === "bought" ? p.bought : !p.bought,
  );

  return (
    <div className="App">
      <Header />
      <Form onAddProducts={handleAddProducts} />

      <ShoppingList
        allProducts={products}
        filter={filter}
        setFilter={setFilter}
        products={filteredProducts}
        onToggleProduct={handleToggleProduct}
        onDeleteProducts={handleDeleteProduct}
        onClearProducts={handleClearProducts}
      />
      <Footer products={products} />
    </div>
  );
}
