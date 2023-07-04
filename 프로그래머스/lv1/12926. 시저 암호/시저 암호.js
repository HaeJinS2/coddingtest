function solution(s, n) {
    return s.split('')
            .map(c => c === ' ' ? c : 
                c.charCodeAt(0) + n > (c === c.toUpperCase() ? 90 : 122) ?
                    String.fromCharCode(c.charCodeAt(0) - 26 + n) : 
                    String.fromCharCode(c.charCodeAt(0) + n))
            .join('');
}