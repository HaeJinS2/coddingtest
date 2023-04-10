function solution(n) {
    var answer = [];
    var temp = n.toString().split("").map(Number)
    temp.sort(function(a, b)  {
        return b - a;
    });
    return temp;
}