export default function CounterInput({ name, inputHandler, inputValue }) {
  return (
    <div className="inputDiv">
      <label htmlFor="step">{name}</label>
      <input
        value={inputValue ? inputValue : ""}
        onChange={(e) => inputHandler(e)}
        name={name}
      />
    </div>
  );
}
