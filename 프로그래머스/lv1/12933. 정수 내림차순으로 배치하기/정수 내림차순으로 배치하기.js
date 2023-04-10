function solution(n) {
    var answer = 0;
    var temp = n.toString().split("")
    temp.sort(function(a, b)  {
        return b - a;
    });
    console.log(temp)
    var temp2 = temp.join("")
    console.log(temp2)
    return parseInt(temp2)
}