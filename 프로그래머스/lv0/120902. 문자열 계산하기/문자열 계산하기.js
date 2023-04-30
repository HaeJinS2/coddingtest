function solution(my_string) {
    var answer = 0;
    let arr = my_string.split(' ')
    while (arr.length > 1) 
{    arr[1] == '+' ? arr[2] = Number(arr[0])+ Number(arr[2]): arr[2] = Number(arr[0]) - Number(arr[2])
    arr.splice(0,2)}
    console.log(arr)
    return arr[0];
}