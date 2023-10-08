//Função que forma o tabuleiro e retorna na tela

export default function Square({ value, onSquareClick }) {
  let squareClass = "square";
  if(value === "X") {
    squareClass += " x-square";
  } else if (value === "O") {
    squareClass += " o-square";
  }
    return (
      <button 
      className={squareClass} 
      onClick={onSquareClick}>
        {value}
      </button>
    );
  }