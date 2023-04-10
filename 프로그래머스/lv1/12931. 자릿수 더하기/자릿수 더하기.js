function solution(n)
{
    var answer = 0;
    var temp = n.toString()

    for (let i=0; i < temp.length; i++) {
        answer += parseInt(temp[i])
    }


    return answer;
}