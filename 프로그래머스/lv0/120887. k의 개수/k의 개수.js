function solution(i, j, k) {
    var answer = 0;
    let str = ""

    for (let a = i ; a <= j; a++) {
    str += String(a)
    }
    let arr = str.split("")
    let newArr = arr.filter((v) => +v === k)

    return newArr.length
}