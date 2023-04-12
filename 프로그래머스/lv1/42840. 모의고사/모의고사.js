function solution(answers) {
    var answer = [];
    let s1 = [1, 2, 3, 4, 5] // 5
    let s2 = [2, 1, 2, 3, 2, 4, 2, 5] // 8
    let s3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5] // 10
    
    let count = [0,0,0]
    
    for (let i=0; i < answers.length ; i++){
        if (answers[i] == s1[i%5]) {
            count[0]++;
        }
        if (answers[i] == s2[i%8]) {
            count[1]++;
        }
        if (answers[i] == s3[i%10]) {
            count[2]++;
        }
    }
    
    let maxCount = Math.max(...count)
    console.log(maxCount)
    
    for (let j = 0 ; j < count.length ; j++) {
        if (count[j] == maxCount) {
            answer.push(j+1); 
        }
    }
    
    return answer;
}