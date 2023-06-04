function solution(left, right) {
    var answer = 0;
//     let numArr = []
//     let divArr = [];
//     // left~rignt를 모두 저장
//     // 저장된 숫자를 순차적으로 돌면서 해당 숫자의 약수를 구함
//     // 해당 숫자의 약수는 해당숫자만큼 돌면서 i로 나눴을 때 0이 되는 수
//     // 그 숫자들을 저장하는 배열에 푸시
//     // 배열을 순차적으로 비교하면서 2로 나누어떨어지면 1에서 저장한 배열의 i번째 인덱스를 더하고 아니면 뺌
    
//     for (let i = left; i <= right; i++) {
//         numArr.push(i)
//     }
//     numArr.map((x) => {
//         let count = 0;
//         for(let i=1; i <= x; i++) { 
//          if (x % i == 0) {
//              count += 1;
//         }
//     }
//         divArr.push(count)
//     })

//     numArr.map((x,i) => {
//         divArr[i] % 2 == 0 ? answer += x : answer -= x
//     })

        for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}