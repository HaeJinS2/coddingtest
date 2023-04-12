function solution(s) {
    var answer = true;
    console.log(parseInt("10e2"))
    // s가 문자 => parseInt(s) : NaN => isNaN => true    
    if (s.includes("e")) {
        return false
    }
    else if (s.length == 4 || s.length == 6) {
        // return !isNaN(parseInt(s)) 
        return isNaN(s) ? answer = false : answer = true
    } else return false
    
    
}