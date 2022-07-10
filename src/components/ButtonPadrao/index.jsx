import "./styles.css";

export function ButtonPadrao({ handleClick, text, className, type }) {
  return (
    <button 
      type={type || ""}
      onClick={handleClick}
      className={`btn-search form-control shadow-none button_padrao ${className ? className : ""}`}
    >
      {text}
    </button>
  );
}
