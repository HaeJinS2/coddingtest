function solution(sizes) {
    var answer = 0;
    let a = [];
    let b = [];
    for (let i=0; i < sizes.length; i++) {
        sizes[i].sort((a,b) => a-b)
        
    }
    console.log(sizes)
    for (let i =0; i < sizes.length; i ++){
        a.push(sizes[i][0])
        b.push(sizes[i][1])
    }
    let aMax = Math.max(...a)
    let bMax = Math.max(...b)
    
    answer = aMax * bMax
    console.log(aMax)
    return answer;
}