function solution(s) {
    let transformCount = 0;  
    let zeroCount = 0; 

    while (s !== '1') {  
        let beforeLength = s.length;
        s = s.replace(/0/g, '');  
        zeroCount += beforeLength - s.length;  
        s = s.length.toString(2);  
        transformCount++;  
    }

    return [transformCount, zeroCount];
}