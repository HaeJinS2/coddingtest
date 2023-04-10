function solution(arr) {
    if (arr.length > 1) {
        let min = Math.min(...arr)
        let answer = arr.filter (x => x !== min)
        return answer
    } else return [-1]
}