function solution(n){
    var answer = 0;
    let sum=0;
    let arr = n.toString().split("")
    console.log(arr)
    for (let i =0; i < arr.length; i++) {
        sum += parseInt(arr[i])
    }
    return sum
}