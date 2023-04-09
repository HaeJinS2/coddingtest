function solution(numbers) {
    return numbers.reduce((acc, cur,inx) => acc + cur) / numbers.length
}