/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let vowels = []
    let consonants = []
    for(let i = 0; i < s.length; i++){
        if(s[i]!=="a" && s[i]!=="e" && s[i]!=="i" && s[i]!=="o" && s[i]!=="u" ){
            consonants.push(s[i])
        }else{
            vowels.push(s[i])
        }
    }
    vowels.concat(consonants).forEach(l=>console.log(l))
}
