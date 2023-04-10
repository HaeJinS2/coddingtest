function solution(s) {
    var answer = '';
    var temp = s.split(" ");
    for (var i in temp) {
        for (var j in temp[i]) {
            if (j%2 !== 0) {
                answer += temp[i][j].toLowerCase();
            } else {
                answer += temp[i][j].toUpperCase();
            }
        }
        answer += " ";
    }
    return answer.slice(0, -1);
}