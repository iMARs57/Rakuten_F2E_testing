// Q4
function isWordExist(board, word){
    // copy original board
    var copyboard = new Array();
    for(var i = 0 ; i < board.length ; i++){
        innerArray = new Array();
        for(var j = 0 ; j < board[i].length ; j++){
            innerArray.push(board[i][j]);
        }
        copyboard.push(innerArray);
    }
    // find initial grid
    var arrayWord = word.split("");
    for(var x = 0 ; x < copyboard .length ; x++){
        for(var y = 0 ; y < copyboard [x].length ; y++){
            if(searchLetter(copyboard , arrayWord, x, y, copyboard .length, copyboard [x].length, 0)){
                return true;
            }
        }
    }
    return false;
}

function searchLetter(board, arrayWord, x, y, xMax, yMax, index){

    if(index >= arrayWord.length){
        return true;
    }
    else{
        if(board[x][y] == arrayWord[index]){
            var isLeft, isRight, isUp, isDown;
            isLeft = isRight = isUp = isDown = false;
            var newboard = Object.assign({}, board);
            newboard[x][y] = false;
            if(x-1 >= 0){
                //console.log("call UP", x, y, index);
                isUp = searchLetter(newboard, arrayWord, x-1, y, xMax, yMax, index+1);
            }
            if(x+1 < xMax){
                //console.log("call DOWN", x, y, index);
                isDown = searchLetter(newboard, arrayWord, x+1, y, xMax, yMax, index+1);
            }
            if(y-1 >= 0){
                //console.log("call LEFT", x, y, index);
                isLeft = searchLetter(newboard, arrayWord, x, y-1, xMax, yMax, index+1);
            }
            if(y+1 < yMax){
                //console.log("call RIGHT", x, y, index);
                isRight = searchLetter(newboard, arrayWord, x, y+1, xMax, yMax, index+1);
            }
            return (isLeft | isRight | isUp | isDown);
        }
        else{
            return false;
        }
    }
}

// demo:
var grid = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];
console.log(isWordExist(grid, "ABCCED"));
console.log(isWordExist(grid, "SEE"));
console.log(isWordExist(grid, "ABCB"));
