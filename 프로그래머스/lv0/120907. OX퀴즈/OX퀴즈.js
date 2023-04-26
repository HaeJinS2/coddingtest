function solution(quiz) {
    var answer = [];
    let a = []
    for (let i=0; i < quiz.length; i++) {
        a.push(quiz[i].split(" "))
    }
    for (let j=0; j < a.length; j++) {
        if (a[j][1] == "-") {
            a[j][0] - a[j][2] == a[j][4] ? answer.push("O") : answer.push("X")
        } else Number(a[j][0]) + Number(a[j][2]) == a[j][4] ? answer.push("O") : answer.push("X")
    }
   console.log(answer)
    return answer;
}