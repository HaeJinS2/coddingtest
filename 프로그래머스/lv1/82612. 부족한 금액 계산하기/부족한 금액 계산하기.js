function solution(price, money, count) {
    var answer = -1;
    let sumMoney = 0;
    
    
    for (let i=0; i <= count; i++){
        sumMoney += price * i
    }
    answer = sumMoney - money
    return answer > 0 ? answer : 0
    

}