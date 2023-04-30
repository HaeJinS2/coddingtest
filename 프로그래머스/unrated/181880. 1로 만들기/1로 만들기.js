function solution(num_list) {
    var answer = 0;
    let count = 0;
    num_list.map(x => {
        while(x > 1) 
        {
            x % 2 == 0 ? x = x/2 : x = (x-1)/2
            answer++
        }
       } 
    )
    return answer;
}