function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    
    var numer = numer1 * denom2 + numer2 * denom1; // 분자
    var denom = denom1 * denom2; // 분모
    var gcdNumber = gcd(numer, denom);
    
    answer.push(numer / gcdNumber);
    answer.push(denom / gcdNumber);
    
    return answer;
}

function gcd (a, b) {
    while (b !== 0) {
        var temp = b;
        b = a % b;
        a = temp;
    }
    
    return a;
}

// 테스트 1 〉	통과 (0.05ms, 33.4MB)
// 테스트 2 〉	통과 (0.06ms, 33.5MB)
// 테스트 3 〉	통과 (0.07ms, 33.5MB)
// 테스트 4 〉	통과 (0.09ms, 33.2MB)
// 테스트 5 〉	통과 (0.08ms, 33.4MB)
// 테스트 6 〉	통과 (0.05ms, 33.4MB)
// 테스트 7 〉	통과 (0.08ms, 33.6MB)
// 테스트 8 〉	통과 (0.05ms, 33.4MB)
// 테스트 9 〉	통과 (0.08ms, 33.4MB)
// 테스트 10 〉	통과 (0.09ms, 33.5MB)
// 테스트 11 〉	통과 (0.08ms, 33.6MB)
// 테스트 12 〉	통과 (0.05ms, 33.5MB)
// 테스트 13 〉	통과 (0.08ms, 33.6MB)
// 테스트 14 〉	통과 (0.07ms, 33.5MB)
// 테스트 15 〉	통과 (0.05ms, 33.4MB)
