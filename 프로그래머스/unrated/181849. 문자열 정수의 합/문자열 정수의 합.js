function solution(num_str) {
    var answer = num_str.split('');
    let num  = answer.map(Number)
    let sum = num.reduce((accumulator, currentNumber) => accumulator + currentNumber);
    console.log(sum)
    return sum;
}