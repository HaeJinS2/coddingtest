function solution(str1, str2) {
    var answer = [];
    let arr1 = str1.split('')
    let arr2 = str2.split('')
    
    for (let i=0; i< arr1.length+arr2.length; i++) {
      answer.push(arr1[i])
      answer.push(arr2[i])
    }
    
    return answer.join('');
}