function solution(n_str) {
    var answer = n_str.split('');
    for (let i=0; i <= 10; i++) {
        if (answer[0] === '0') {
            answer.shift();
        }
    }

    return answer.join('');
}