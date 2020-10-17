import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vieja',
  templateUrl: './vieja.component.html',
  styleUrls: ['./vieja.component.css']
})
export class ViejaComponent implements OnInit {
  quiengano = 'Next player: X';
  squares = Array<String>(9).fill(null);
  hayganador = 0;
    contador = 0;
    history = [
      {
        squares:Array<String>(9).fill(null)
      }
    ];
    stepNumber = 0;
    xIsNext = true;

  constructor() {
    //this.state.hayganador = 0;
    //this.state.xIsNext = true;
    //this.state.contador = 0;
    //this.state.stepNumber = 0;
    //var squares = [null,null,null,null,null,null,null,null,null];//Array<String>(9).fill(null);
    //this.state.history.push(squares);
   }

  ngOnInit() {
    /* var squares = [null,null,null,null,null,null,null,null,null];//Array<String>(9).fill(null);
    this.state.history.push(squares); */
  }

  quiengano2(){
    const squares = this.history[this.stepNumber];
  if (this.hayganador == 1) {
    return 'Winner: ' + (this.xIsNext ? 'O' : 'X');
  } else {
    return 'Next player: ' + (this.xIsNext ? 'X' : 'O');
  }
  }

  mostrarSquares(i)
  { 
    /* const current = this.history[history.length - 1];
    return current.squares[i] == null ? ' ':current.squares[i].toString(); */
    return this.squares[i];
  }

  handleClick(i) {
    this.quiengano = this.quiengano2();
    if(this.hayganador == 1){
      return;
    }
    
    //console.log(i);
    
    //console.log(this.squares[i])
    const history = this.history.slice(0, this.stepNumber + 1);
    //const current = history[history.length - 1];
    //const squares = current.squares.slice();
    const squares = this.squares.slice();
    const caracter = this.xIsNext ? 'X' : 'O';
    this.squares[i] = caracter.toString();
    //this.state.history.push({squares: squares});
    //this.state.stepNumber++;

    this.history = history.concat([{ squares: squares }]),
    this.stepNumber = history.length;
    this.xIsNext = !this.xIsNext;

    console.log(this.squares);

    if (this.calculateWinner(this.squares) ) {
      this.hayganador = 1;
    }else{
      this.hayganador = 0;
    }
    
}
jumpTo(step) {
  this.stepNumber = 0;
    this.xIsNext = (step % 2) === 0;
    this.squares = this.history[step].squares;
    this.history = [
      {
        squares:Array<String>(9).fill(null)
      }
    ];
}
  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

}
