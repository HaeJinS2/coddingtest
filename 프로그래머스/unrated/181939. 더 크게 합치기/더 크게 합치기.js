function solution(a, b) {
    var answer = 0;
    let sum1 = a.toString()+b.toString()
    let sum2 = b.toString()+a.toString()
    return  sum1 - sum2 > 0 ? parseInt(sum1) : parseInt(sum2)
}