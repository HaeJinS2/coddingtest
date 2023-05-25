function solution(s) {
    var answer = '';
    let str = s.toLowerCase().split('')
    // let str2 = str.map((x) => x.length == 1 ? x[0].toUpperCase() : x[0].toUpperCase() + x.slice(1))
    // console.log(str2)
    let str2 = str.map((x, i) => {
        if (x==' ' && str.length-1 !== i) {
            str[i+1] = str[i+1].toUpperCase()
        }
    })
    str[0]= str[0].toUpperCase()

    return str.join('')
}