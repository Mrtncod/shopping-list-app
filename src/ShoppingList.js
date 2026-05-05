import ShoppingItems from "./ShoppingItems";

export default function ShoppingList({
  allProducts,
  products,
  onToggleProduct,
  onDeleteProducts,
  onClearProducts,
  filter,
  setFilter,
}) {
  if (!allProducts.length) return <h4>Start adding items </h4>;
  return (
    <div className="shop-list">
      <ul>
        {products.map((product) => (
          <ShoppingItems
            product={product}
            key={product.id}
            onToggleProduct={onToggleProduct}
            onDeleteProducts={onDeleteProducts}
          />
        ))}
      </ul>
      <div className="controls">
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">Sort by All</option>
          <option value="bought">Sort by Added</option>
          <option value="unbought">Sort by Remaining</option>
        </select>
        <button onClick={() => onClearProducts()}>Clear list</button>
      </div>
    </div>
  );
}
