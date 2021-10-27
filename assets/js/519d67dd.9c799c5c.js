"use strict";(self.webpackChunkasgardians=self.webpackChunkasgardians||[]).push([[2258],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),h=p(t),m=i,d=h["".concat(s,".").concat(m)]||h[m]||c[m]||o;return t?a.createElement(d,l(l({ref:n},u),{},{components:t})):a.createElement(d,l({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=h;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},306:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return c},toc:function(){return h},default:function(){return g}});var a,i=t(7462),o=t(3366),l=(t(7294),t(3905)),r=["components"],s={slug:"Chess-AI",title:"Chess-AI",authors:"timnirmal",tags:["Chess","AI"]},p=void 0,u={permalink:"/AsgardiansCode/blog/Chess-AI",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/Chess-AI.md",source:"@site/blog/Chess-AI.md",title:"Chess-AI",description:"This project is made with chess and chesscoardjs.",date:"2021-10-27T13:03:27.528Z",formattedDate:"October 27, 2021",tags:[{label:"Chess",permalink:"/AsgardiansCode/blog/tags/chess"},{label:"AI",permalink:"/AsgardiansCode/blog/tags/ai"}],readingTime:5.12,truncated:!1,authors:[{name:"Thimira Nirmal",title:"Undergraduate of USJ",imageURL:"https://avatars.githubusercontent.com/u/42657815?s=400&u=0f92f82c8a7caab60a1c5139b0e10dbfe9d849f8&v=4",key:"timnirmal"}],prevItem:{title:"Agile",permalink:"/AsgardiansCode/blog/Agile"},nextItem:{title:"Industry and WFH",permalink:"/AsgardiansCode/blog/Industry"}},c={authorsImageUrls:[void 0]},h=[{value:"Setup Chess Board",id:"setup-chess-board",children:[],level:2},{value:"Configurations",id:"configurations",children:[{value:"Orientation",id:"orientation",children:[],level:3},{value:"Notation",id:"notation",children:[],level:3},{value:"Show Positions and FEN in console",id:"show-positions-and-fen-in-console",children:[],level:3}],level:2},{value:"Preparing Evaluation Method",id:"preparing-evaluation-method",children:[{value:"Pawns",id:"pawns",children:[],level:3},{value:"Knight",id:"knight",children:[],level:3},{value:"Bishop",id:"bishop",children:[],level:3},{value:"Rook",id:"rook",children:[],level:3},{value:"Queen",id:"queen",children:[],level:3},{value:"King",id:"king",children:[],level:3},{value:"King End Game",id:"king-end-game",children:[],level:3}],level:2},{value:"Centipawn Values",id:"centipawn-values",children:[],level:2},{value:"Alpha Beta Pruning",id:"alpha-beta-pruning",children:[],level:2}],m=(a="Summery",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),d={toc:h};function g(e){var n=e.components,a=(0,o.Z)(e,r);return(0,l.kt)("wrapper",(0,i.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This project is made with ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/jhlywa/chess.js"},"chess")," and ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/oakmac/chessboardjs/"},"chesscoardjs"),"."),(0,l.kt)("p",null,"For AI, minimax algorithm and Piece-square tables are used."),(0,l.kt)("p",null,"You can view the final output in here, ",(0,l.kt)("a",{parentName:"p",href:"https://timnirmal.github.io/Chess-AI/"},"https://timnirmal.github.io/Chess-AI/")),(0,l.kt)("p",null,"Code files Github : ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/timnirmal/Chess-AI"},"https://github.com/timnirmal/Chess-AI")),(0,l.kt)("p",null,"Each step can be found in respective commit,"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Initial commit - Basic Chess Board Setup files to start"),(0,l.kt)("li",{parentName:"ul"},"Allow only Legal Moves"),(0,l.kt)("li",{parentName:"ul"},"Simple Status"),(0,l.kt)("li",{parentName:"ul"},"Computer Play Random"),(0,l.kt)("li",{parentName:"ul"},"Computer Play Random both side"),(0,l.kt)("li",{parentName:"ul"},"Highlight Legal Moves"),(0,l.kt)("li",{parentName:"ul"},"AI Done (Minimax with Alpha Beta)")),(0,l.kt)("p",null,"So that's about the introduction. Lets begging Project."),(0,l.kt)("h2",{id:"setup-chess-board"},"Setup Chess Board"),(0,l.kt)("p",null,"In initial commit all the files need to make the game is included. So go there and start your journey."),(0,l.kt)("p",null,"Even though below functions are empty you still need them to get output + we will use them later."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"onDragStart, onDrop, onSnapEnd, onMouseoverSquare, onMouseoutSquare\n")),(0,l.kt)("p",null,"We can use ",(0,l.kt)("inlineCode",{parentName:"p"},"config")," to do the configurations."),(0,l.kt)("details",null,(0,l.kt)(m,{mdxType:"Summery"}),"If you want you can simply delete that and go with board = ChessBoard('board', start);"),(0,l.kt)("p",null,"Note that at this point it only show the Board and the Chess Pieces."),(0,l.kt)("h2",{id:"configurations"},"Configurations"),(0,l.kt)("h3",{id:"orientation"},"Orientation"),(0,l.kt)("p",null,"Orientation can be either white or black which is the side you play."),(0,l.kt)("h3",{id:"notation"},"Notation"),(0,l.kt)("p",null,"Notation is boolean values which used to on and off board notation"),(0,l.kt)("h3",{id:"show-positions-and-fen-in-console"},"Show Positions and FEN in console"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<button id="showPositionBtn">Show position in console</button>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"$('#showPositionBtn').on('click', clickShowPositionBtn)\n\nfunction clickShowPositionBtn () {\n    console.log('Current position as an Object:')\n    console.log(board.position())\n\n    console.log('Current position as a FEN string:')\n    console.log(board.fen())\n}\n")),(0,l.kt)("p",null,"After preparing board, and now we can make out AI."),(0,l.kt)("h2",{id:"preparing-evaluation-method"},"Preparing Evaluation Method"),(0,l.kt)("p",null,"First we need to prepare evaluation method which will be used in algorithm. Evaluation is technique that let players or algorithm decide which side is better in particular position of the board. Based on these divisions paler can decide either attack or loose and what move to do."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://chessfox.com/example-of-the-complete-evaluation-process-of-chess-a-chess-position/"},"Evaluation")," is kind of complex process, so we use a simple method for that using ",(0,l.kt)("a",{parentName:"p",href:"https://www.chessprogramming.org/Simplified_Evaluation_Function"},"piece-square tables.")),(0,l.kt)("h3",{id:"pawns"},"Pawns"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// pawn\n 0,  0,  0,  0,  0,  0,  0,  0,\n50, 50, 50, 50, 50, 50, 50, 50,\n10, 10, 20, 30, 30, 20, 10, 10,\n 5,  5, 10, 25, 25, 10,  5,  5,\n 0,  0,  0, 20, 20,  0,  0,  0,\n 5, -5,-10,  0,  0,-10, -5,  5,\n 5, 10, 10,-20,-20, 10, 10,  5,\n 0,  0,  0,  0,  0,  0,  0,  0\n")),(0,l.kt)("h3",{id:"knight"},"Knight"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// knight\n-50,-40,-30,-30,-30,-30,-40,-50,\n-40,-20,  0,  0,  0,  0,-20,-40,\n-30,  0, 10, 15, 15, 10,  0,-30,\n-30,  5, 15, 20, 20, 15,  5,-30,\n-30,  0, 15, 20, 20, 15,  0,-30,\n-30,  5, 10, 15, 15, 10,  5,-30,\n-40,-20,  0,  5,  5,  0,-20,-40,\n-50,-40,-30,-30,-30,-30,-40,-50\n")),(0,l.kt)("h3",{id:"bishop"},"Bishop"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// bishop\n-20,-10,-10,-10,-10,-10,-10,-20,\n-10,  0,  0,  0,  0,  0,  0,-10,\n-10,  0,  5, 10, 10,  5,  0,-10,\n-10,  5,  5, 10, 10,  5,  5,-10,\n-10,  0, 10, 10, 10, 10,  0,-10,\n-10, 10, 10, 10, 10, 10, 10,-10,\n-10,  5,  0,  0,  0,  0,  5,-10,\n-20,-10,-10,-10,-10,-10,-10,-20,\n")),(0,l.kt)("h3",{id:"rook"},"Rook"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"//rook\n  0,  0,  0,  0,  0,  0,  0,  0,\n  5, 10, 10, 10, 10, 10, 10,  5,\n -5,  0,  0,  0,  0,  0,  0, -5,\n -5,  0,  0,  0,  0,  0,  0, -5,\n -5,  0,  0,  0,  0,  0,  0, -5,\n -5,  0,  0,  0,  0,  0,  0, -5,\n -5,  0,  0,  0,  0,  0,  0, -5,\n  0,  0,  0,  5,  5,  0,  0,  0\n")),(0,l.kt)("h3",{id:"queen"},"Queen"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"//queen\n-20,-10,-10, -5, -5,-10,-10,-20,\n-10,  0,  0,  0,  0,  0,  0,-10,\n-10,  0,  5,  5,  5,  5,  0,-10,\n -5,  0,  5,  5,  5,  5,  0, -5,\n  0,  0,  5,  5,  5,  5,  0, -5,\n-10,  5,  5,  5,  5,  5,  0,-10,\n-10,  0,  5,  0,  0,  0,  0,-10,\n-20,-10,-10, -5, -5,-10,-10,-20\n")),(0,l.kt)("h3",{id:"king"},"King"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"//king middle game\n-30,-40,-40,-50,-50,-40,-40,-30,\n-30,-40,-40,-50,-50,-40,-40,-30,\n-30,-40,-40,-50,-50,-40,-40,-30,\n-30,-40,-40,-50,-50,-40,-40,-30,\n-20,-30,-30,-40,-40,-30,-30,-20,\n-10,-20,-20,-20,-20,-20,-20,-10,\n 20, 20,  0,  0,  0,  0, 20, 20,\n 20, 30, 10,  0,  0, 10, 30, 20\n")),(0,l.kt)("p",null,"The middle game is defined since there is pawn shelter for king. When,"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Both sides have no queens or"),(0,l.kt)("li",{parentName:"ol"},"Every side which has a queen has additionally no other pieces or one minor piece maximum.")),(0,l.kt)("p",null,"End game is defined. (But we only use middle game table for these steps.)"),(0,l.kt)("h3",{id:"king-end-game"},"King End Game"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// king end game\n-50,-40,-30,-20,-20,-30,-40,-50,\n-30,-20,-10,  0,  0,-10,-20,-30,\n-30,-10, 20, 30, 30, 20,-10,-30,\n-30,-10, 30, 40, 40, 30,-10,-30,\n-30,-10, 30, 40, 40, 30,-10,-30,\n-30,-10, 20, 30, 30, 20,-10,-30,\n-30,-30,  0,  0,  0,  0,-30,-30,\n-50,-30,-30,-30,-30,-30,-30,-50\n")),(0,l.kt)("h2",{id:"centipawn-values"},"Centipawn Values"),(0,l.kt)("p",null,"Centipawn is the unit of measure used in chess as measure of the advantage. A centipawn is considered as equal to 1/100 of a pawn. Therefore, ",(0,l.kt)("strong",{parentName:"p"},"100 centipawns = 1 pawn")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Pawns   => 100 centipawns"),(0,l.kt)("li",{parentName:"ul"},"Knight \t=> 300 centipawns"),(0,l.kt)("li",{parentName:"ul"},"Bishop \t=> 300 centipawns"),(0,l.kt)("li",{parentName:"ul"},"Rook    => 500 centipawns"),(0,l.kt)("li",{parentName:"ul"},"Queen   => 900 centipawns")),(0,l.kt)("h1",{id:"developing-ai-algorithm-for-play-chess"},"Developing AI algorithm for Play Chess"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img.png",src:t(5061).Z})),(0,l.kt)("p",null,"Minimax Function Algorithm"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function minimax (position, depth, maximizingPlayer) {\n    if depth == 0 or game over in position\n        return static evaluation of position\n    if maximizingPlayer\n        maxEval = -infinity\n        for each child of position\n            eval = minimax(child, depth-1, false)\n            maxEval = max(maxEval, eval)\n        return maxEval\n    else\n        minEval = +infinity\n        for each child of position\n            eval = minimax(child, depth-1, true)\n            minEval = min(minEval, eval)\n        return minEval\n}\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"position - current position")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"depth - how many moves ahead we need to search")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"maximizingPlayer = bool"))),(0,l.kt)("h2",{id:"alpha-beta-pruning"},"Alpha Beta Pruning"),(0,l.kt)("p",null,"We can optimize this algorithm by introducing alpha beta pruning"),(0,l.kt)("p",null,"This modification will speed up the code and reduce unnecessary calculations."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function minimax (position, depth, alpha, beta, maximizingPlayer) {\n    if depth == 0 or game over in position\n    return static evaluation of position\n\n    if maximizingPlayer\n        maxEval = -infinity\n    for each child of position\n    eval = minimax(child, depth-1, alpha, beta, false)\n    maxEval = max(maxEval, eval)\n    alpha = max (alpha, eval)\n    if beta <= alpha\n        break\n    return maxEval\nelse\n    minEval = +infinity\n    for each child of position\n    eval = minimax(child, depth-1, alpha, beta, true)\n    minEval = min(minEval, eval)\n    beta = min (beta, eval)\n    if beta <= alpha\n        break\n    return minEval\n}\n")),(0,l.kt)("p",null,"So that's it, and You can refer below links if more info needed,"),(0,l.kt)("p",null,"Minimax Algorithm"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=l-hh51ncgDI&ab_channel=SebastianLague"},"https://www.youtube.com/watch?v=l-hh51ncgDI&ab_channel=SebastianLague"))),(0,l.kt)("p",null,"Evaluation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.chessprogramming.org/Simplified_Evaluation_Function"},"https://www.chessprogramming.org/Simplified_Evaluation_Function")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://chessfox.com/example-of-the-complete-evaluation-process-of-chess-a-chess-position/"},"https://chessfox.com/example-of-the-complete-evaluation-process-of-chess-a-chess-position/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://chessquestions.com/centipawn-loss-in-chess/"},"https://chessquestions.com/centipawn-loss-in-chess/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://chess.fandom.com/wiki/Centipawn"},"https://chess.fandom.com/wiki/Centipawn"))))}g.isMDXComponent=!0},5061:function(e,n,t){n.Z=t.p+"assets/images/img-1753e612e233e785d719090ee1b38c6f.png"}}]);