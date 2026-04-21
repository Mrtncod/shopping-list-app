export default function Footer({ products }) {
  const total = products.length;
  const bought = products.filter((p) => p.bought).length;
  const remaining = total - bought;
  const allBought = total > 0 && bought === total;
  return (
    <div className="footer">
      {allBought ? (
        <h3>🛒 Shopping done 🎉</h3>
      ) : (
        <>
          <span>All items: {total}</span>
          <span>Bought items: {bought}</span>
          <span>Remaining items: {remaining}</span>
        </>
      )}
    </div>
  );
}
