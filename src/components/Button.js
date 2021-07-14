export default function CounterButton(props) {
  return (
    <button
      disabled={props.disabled}
      className="counterBtn"
      onClick={props.clicked}
    >
      {props.type}
    </button>
  );
}
