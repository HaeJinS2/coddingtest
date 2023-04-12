function solution(n) {
    var answer = [];
    answer = n.toString().split("").reverse().map(v=> +v)
    return answer
}