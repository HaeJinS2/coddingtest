function solution(arr, k) {
    var answer = [];
    answer = k % 2 == 0 ? arr.map((i) => i + k) : arr.map((i) => i * k)
    return answer;
}