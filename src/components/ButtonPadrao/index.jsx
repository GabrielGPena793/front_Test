import "./styles.css";

export function ButtonPadrao({ handleClick, text, disabled, className }) {
  return (
    <button
      disabled={disabled || false}
      onClick={handleClick}
      className={`form-control shadow-none button_padrao ${className}`}
    >
      {text}
    </button>
  );
}
