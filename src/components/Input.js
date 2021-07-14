export default function CounterInput({ name, inputHandler }) {
  return (
    <div className="inputDiv">
      <label htmlFor="step">{name}</label>
      <input onChange={(e) => inputHandler(e)} name={name} />
    </div>
  );
}
