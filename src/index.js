import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class Square extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: null,
//         };
//     }

//     render() {
//     //接受來自Board的參數
//     //function() {}, 可縮寫為arrow function,  () =>
//       return (
//         <button 
//             className="square" 
//             onClick={() => this.setState({value: 'X'})}
//         >
//           {this.state.value}
//         </button>
//       );
//     }
//   }
  
function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}
  class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    renderSquare(i) {
    //將i 由 board 傳送到 square (value為 prop, 可自由命名 )
      return (
        <Square 
            value={this.state.Squares[i]}
            onClick={() => this.handleClick(i)}
        />
      );
    }

    handleClick(i) {
        const squares = this.state.Squares.slice();
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            Squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }
  
    render() {
      const status = 'Next player: '+ (this.state.xIsNext? 'X': 'O');
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(9)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  