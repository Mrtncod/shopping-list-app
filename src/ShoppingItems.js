export default function ShoppingItems({
  product,
  onToggleProduct,
  onDeleteProducts,
}) {
  return (
    <li className="shop-items">
      <input
        className="checkbox"
        type="checkbox"
        checked={product.bought}
        onChange={() => onToggleProduct(product.id)}
      />
      <span
        style={
          product.bought
            ? {
                textDecoration: "line-through",
                color: "#1fe561",
              }
            : {}
        }
      >
        {product.amount} {product.item}
      </span>
      <button onClick={() => onDeleteProducts(product.id)}>X</button>
    </li>
  );
}
