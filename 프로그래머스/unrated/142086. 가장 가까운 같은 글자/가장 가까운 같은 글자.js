function solution(s) {
    var answer = [];
    let arr = s.split('');
    for (let i = 0; i < arr.length; i++) {
        let foundAt = -1;
        for (let j = i - 1; j >= 0; j--) {
            if (arr[i] === arr[j]) {
                foundAt = i - j;
                break;
            }
        }
        answer.push(foundAt);
    }
    return answer;
}