import { useState } from "react";
import Square from "./Square";
import calculateWinner from "./calculateWinner";
import '../../css/Game.css';

//A função Board controla os movimentos e renderiza o tabuleiro
function Board({ xIsNext, squares, onPlay }) {
  //A função handleClick faz a ação do clique no botão e atualiza o tabuleiro pro jogador da vez
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  //função que chama o componente e mostra na tela qual o vencedor ou empate!
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Vencedor: " + winner;

  // Verifica se todos os quadrados estão preenchidos e nenhum venceu
  } else if (squares.every(square => square !== null)) {
    status = "Empate!";
  } else {
    status = "Próximo jogador: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

//A função Game controla o estado global do jogo, o histórico e renderiza o tabuleiro
export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  //Função que registra a jogada atual no histórico do jogo e avança o estado do jogo para o próximo movimento
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  //Função que permite que o jogador visualize o histórico de jogadas
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  //Função que gera o histórico de jogadas e permite recomeçar o jogo
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "IR PARA MOVIMENTO " + move;
    } else {
      description = "RECOMEÇAR O JOGO";
    }
    return (
      <li class="LiGame" key={move}>
        <button class="ButtonGame" onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  //Função onde retorna todo o jogo, trazendo o tabuleiro e o histórico de jogadas
  return (
    <>
      <h1 class="TituloGame">Jogo da Velha</h1>
      <div className="Game">
        <div className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className="game-info">
        <h1>Histórico</h1>
          <ol>{moves}</ol>
        </div>
      </div>
    </>
  );
}
