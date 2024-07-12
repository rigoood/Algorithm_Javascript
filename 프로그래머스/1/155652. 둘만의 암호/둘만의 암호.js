function solution(s, skip, index) {
    // a:97 - z:122
    let answer = "";
    skip = skip.split("").map(sk => sk.charCodeAt(0)).sort((a, b) => a - b);
    
    s.split("").forEach(a => {
        let cur = a.charCodeAt(0)+1;
        let nxt = cur + index;
        
        let cnt = 0;
        
        while (cnt < index) {
            if (cur > 122) cur -= 26;
            
            if (skip.includes(cur)) {
                cur++;
                continue;
            }
            
            cur++;
            cnt++;
        }
        
        answer += String.fromCharCode(--cur);
    })
    
    return answer;
}