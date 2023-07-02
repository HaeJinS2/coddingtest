function solution(num_list) {
    var answer = [];
    let count = 0;
    let count2 = 0;
    num_list.map((item)  => item % 2 === 0 ? count ++ : count2++)
    answer.push(count,count2);
    return answer;
}