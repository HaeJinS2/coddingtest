function solution(board) {
    var answer = [];
    let arr = []
    let total = board.length * board[0].length

       for(let i=0; i<board.length; i++) {
        for(let j=0; j<board[i].length; j++) {
            if(board[i][j] == 1) {
                arr.push([i,j]);
                if(i>0 && j>0) arr.push([i-1,j-1]);
                if(i>0) arr.push([i-1,j]);
                if(i>0 && j<board[i].length-1) arr.push([i-1,j+1]);
                if(j>0) arr.push([i,j-1]);
                if(j<board[i].length-1) arr.push([i,j+1]);
                if(i<board.length-1 && j>0) arr.push([i+1,j-1]);
                if(i<board.length-1) arr.push([i+1,j]);
                if(i<board.length-1 && j<board[i].length-1) arr.push([i+1,j+1]);
            }
        }
    }

    answer = Array.from(new Set(arr.map(JSON.stringify)), JSON.parse);
    return total - answer.length;
}