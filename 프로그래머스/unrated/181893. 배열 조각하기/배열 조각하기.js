function solution(arr, query) {
    var answer = [];
    for(let i =0 ; i < query.length; i++) {
        let a = query[i]
        if (i % 2 == 0) {
            arr = arr.slice(0, a+1)
        } else {
            arr = arr.slice(a)
        }
    }
    
    return arr;
}

// 	[0, 1, 2, 3, 4, 5] -> [0, 1, 2, 3, 5] -> [0, 1, 2, 3] -> [0, 1, 2, 3, 4]