//https://www.hackerrank.com/challenges/js10-template-literals/problem

function sides(literals, ...expressions) {
    const [a, p] = expressions;
    let s1 = (p + Math.sqrt(p*p -16 *a))/4;
    let s2 = (p - Math.sqrt(p*p -16 *a))/4;
    return [s1, s2].sort();
}
