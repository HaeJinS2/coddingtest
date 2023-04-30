function solution(num_list) {
    var answer = 0;
    let sum = num_list.reduce((accumulator, currentNumber) => accumulator + currentNumber);
    let mul = num_list.reduce((accumulator, currentNumber) => accumulator * currentNumber);
    return (mul < sum*sum) ? 1 : 0
}