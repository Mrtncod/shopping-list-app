import { useState } from "react";

export default function Form({ onAddProducts }) {
  const [amount, setAmount] = useState(1);
  const [item, setItem] = useState("");

  function handleForm(e) {
    e.preventDefault();
    if (!item) return;

    const newItem = {
      amount,
      item,
      id: Date.now(),
      bought: false,
    };
    // console.log(newItem);
    onAddProducts(newItem);
    setAmount(1);
    setItem("");
  }

  return (
    <form className="form" onSubmit={handleForm}>
      <div className="div-inputs">
        <label>Amount</label>
        <select
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
      </div>
      <div className="div-inputs">
        <label>Items</label>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
      </div>
      <button className="btn-add">Add</button>
    </form>
  );
}
