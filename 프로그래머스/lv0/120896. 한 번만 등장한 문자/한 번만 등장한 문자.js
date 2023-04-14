function solution(s) {
    var answer = '';
    let arr = s.split("") // map에 담을거
    let map = new Map()
    // {key: value} /// set ==> + , push
    // get ==> key값을 넣으면 value를 뱉어요
    // has ==> key를 갖고있으면 true 없으면 false
    // delete , clear
    for (let i = 0 ; i < arr.length; i++) {
    // a b c a b c a d c
    if(map.has(arr[i])) {
    map.set( arr[i], map.get(arr[i]) + 1)
    } else {
    map.set(arr[i], 1)
    }
    }
    // console.log([...map])

    [...map].filter(v => {
    if( v[1] === 1) answer += v[0]
    })
    let sorted = answer.split("").sort()
    return sorted.join("")
}