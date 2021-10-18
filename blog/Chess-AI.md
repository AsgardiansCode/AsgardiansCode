In inital commit all the files need to make the game is included. So go there and start your journey.

Even though below functions are empty you still need them to get output + we will use them later.

```js
onDragStart, onDrop, onSnapEnd, onMouseoverSquare, onMouseoutSquare
```

We can use ```config``` to do the configurations.

<details>
    <Summery></Summery>
    If you want you can simply delete that and go with
    	board = ChessBoard('board', start);
</details>


Note that at this point it only show the Board and the Chess Pieces.



## Configurations

### Oriantion

Oriantation can be either white or black which is the side you play.

### Notation

Notation is boolean values which used to on and off board notation

### Show Positions and FEN in console

```html
<button id="showPositionBtn">Show position in console</button>
```

```js
$('#showPositionBtn').on('click', clickShowPositionBtn)

function clickShowPositionBtn () {
    console.log('Current position as an Object:')
    console.log(board.position())

    console.log('Current position as a FEN string:')
    console.log(board.fen())
}
```

## Events

### OnChange





## Integrations

### Only allow legal moves

This will



After preparing board and now we can make out AI.



## Preparing Evaluation Method

First we need to prepare evaluation method which will be used in algorithm. Evaluation is technique that let players or algorithm decide which side is better in particular postion of the board. Based on these dicision palyer can decide either attac or loose and what move to do.

[Evaluation](https://chessfox.com/example-of-the-complete-evaluation-process-of-chess-a-chess-position/) is kind of complex process so we use a simple method for that using [piece-square tables.](https://www.chessprogramming.org/Simplified_Evaluation_Function)



### Pawns

```js
// pawn
 0,  0,  0,  0,  0,  0,  0,  0,
50, 50, 50, 50, 50, 50, 50, 50,
10, 10, 20, 30, 30, 20, 10, 10,
 5,  5, 10, 25, 25, 10,  5,  5,
 0,  0,  0, 20, 20,  0,  0,  0,
 5, -5,-10,  0,  0,-10, -5,  5,
 5, 10, 10,-20,-20, 10, 10,  5,
 0,  0,  0,  0,  0,  0,  0,  0
```

Knight

```js
// knight
-50,-40,-30,-30,-30,-30,-40,-50,
-40,-20,  0,  0,  0,  0,-20,-40,
-30,  0, 10, 15, 15, 10,  0,-30,
-30,  5, 15, 20, 20, 15,  5,-30,
-30,  0, 15, 20, 20, 15,  0,-30,
-30,  5, 10, 15, 15, 10,  5,-30,
-40,-20,  0,  5,  5,  0,-20,-40,
-50,-40,-30,-30,-30,-30,-40,-50,
```

Bishop

```js
// bishop
-20,-10,-10,-10,-10,-10,-10,-20,
-10,  0,  0,  0,  0,  0,  0,-10,
-10,  0,  5, 10, 10,  5,  0,-10,
-10,  5,  5, 10, 10,  5,  5,-10,
-10,  0, 10, 10, 10, 10,  0,-10,
-10, 10, 10, 10, 10, 10, 10,-10,
-10,  5,  0,  0,  0,  0,  5,-10,
-20,-10,-10,-10,-10,-10,-10,-20,
```

Rook

```js
rook
  0,  0,  0,  0,  0,  0,  0,  0,
  5, 10, 10, 10, 10, 10, 10,  5,
 -5,  0,  0,  0,  0,  0,  0, -5,
 -5,  0,  0,  0,  0,  0,  0, -5,
 -5,  0,  0,  0,  0,  0,  0, -5,
 -5,  0,  0,  0,  0,  0,  0, -5,
 -5,  0,  0,  0,  0,  0,  0, -5,
  0,  0,  0,  5,  5,  0,  0,  0
```

Queen

```js
//queen
-20,-10,-10, -5, -5,-10,-10,-20,
-10,  0,  0,  0,  0,  0,  0,-10,
-10,  0,  5,  5,  5,  5,  0,-10,
 -5,  0,  5,  5,  5,  5,  0, -5,
  0,  0,  5,  5,  5,  5,  0, -5,
-10,  5,  5,  5,  5,  5,  0,-10,
-10,  0,  5,  0,  0,  0,  0,-10,
-20,-10,-10, -5, -5,-10,-10,-20
```

King

```js
king middle game
-30,-40,-40,-50,-50,-40,-40,-30,
-30,-40,-40,-50,-50,-40,-40,-30,
-30,-40,-40,-50,-50,-40,-40,-30,
-30,-40,-40,-50,-50,-40,-40,-30,
-20,-30,-30,-40,-40,-30,-30,-20,
-10,-20,-20,-20,-20,-20,-20,-10,
 20, 20,  0,  0,  0,  0, 20, 20,
 20, 30, 10,  0,  0, 10, 30, 20
```

The middle game is defined since there is pawn shelter for king. When,

1. Both sides have no queens or
2. Every side which has a queen has additionally no other pieces or one minorpiece maximum.

End game is defined. (But we only use middle game table for this steps.)

King End Game

```js
// king end game
-50,-40,-30,-20,-20,-30,-40,-50,
-30,-20,-10,  0,  0,-10,-20,-30,
-30,-10, 20, 30, 30, 20,-10,-30,
-30,-10, 30, 40, 40, 30,-10,-30,
-30,-10, 30, 40, 40, 30,-10,-30,
-30,-10, 20, 30, 30, 20,-10,-30,
-30,-30,  0,  0,  0,  0,-30,-30,
-50,-30,-30,-30,-30,-30,-30,-50
```



## Centipawn Values

Centipawn is the unit of measure used in chess as measure of the advantage. A centipawn is considered as equal to 1/100 of a pawn. Therefore, **100 centipawns = 1 pawn**

- Pawns   => 100 centipawns
- Knight 	=> 300 centipawns
- Bishop 	=> 300 centipawns
- Rook    => 500 centipawns
- Queen   => 900 centipawns












# Developing AI algorithm for Play Chess

https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Plminmax.gif/400px-Plminmax.gif

Minimax Function Algorithm

```js
function minimax (position, depth, maximizingPlayer) {
    if depth == 0 or game over in position
        return static evaluation of position
    if maximizingPlayer
        maxEval = -infinity
        for each child of position
            eval = minimax(child, depth-1, false)
            maxEval = max(maxEval, eval)
        return maxEval
    else
        minEval = +infinity
        for each child of position
            eval = minimax(child, depth-1, true)
            minEval = min(minEval, eval)
        return minEval
}

```


postion - current position

depth - how many moves ahead we need to search

maximizingPlayer = bool



We can optimize this algorithm by introducing alpha beta

This modification will speed up the code and reduce unnecessary calculations.

```js
function minimax (position, depth, alpha, beta, maximizingPlayer) {
    if depth == 0 or game over in position
    return static evaluation of position

    if maximizingPlayer
        maxEval = -infinity
    for each child of position
    eval = minimax(child, depth-1, alpha, beta, false)
    maxEval = max(maxEval, eval)
    alpha = max (alpha, eval)
    if beta <= alpha
        break
    return maxEval
else
    minEval = +infinity
    for each child of position
    eval = minimax(child, depth-1, alpha, beta, true)
    minEval = min(minEval, eval)
    beta = min (beta, eval)
    if beta <= alpha
        break
    return minEval
}
```

