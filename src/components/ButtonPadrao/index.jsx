import "./styles.css";

export function ButtonPadrao({ handleClick, text }) {
  return (
    <button 
      onClick={handleClick}
      className="btn-search form-control shadow-none button_padrao"
    >
      {text}
    </button>
  );
}
