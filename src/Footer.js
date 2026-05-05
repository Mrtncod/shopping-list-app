export default function Footer({ products }) {
  const total = products.length;
  const bought = products.filter((p) => p.bought).length;
  const remaining = total - bought;
  const allBought = total > 0 && bought === total;
  return (
    <div className="footer">
      {allBought ? (
        <h3> All items are added in your cart </h3>
      ) : (
        <>
          <span>All: {total}</span>
          <span>Added: {bought}</span>
          <span>Remaining: {remaining}</span>
        </>
      )}
    </div>
  );
}
