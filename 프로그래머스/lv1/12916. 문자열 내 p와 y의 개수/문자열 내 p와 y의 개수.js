function solution(s){
    let arr = s.split("")
    let countP = 0;
    let countY = 0;
    console.log(arr)
    for (let i =0 ; i < arr.length; i++) {
        if (arr[i] == "p" || arr[i] == "P") {
            countP++
        } else if (arr[i] == "y" || arr[i] == "Y") {
            countY++
        }

    }
            if (countP == countY) {
            return true
        } else return false
}