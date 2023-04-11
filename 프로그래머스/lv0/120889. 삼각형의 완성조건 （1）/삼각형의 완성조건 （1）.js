function solution(sides) {
    // return Math.min(...sides) * 2 - 1;
    sides.sort((a,b)=> a-b )
    return sides[0] + sides[1] > sides[2] ? 1 : 2    
}