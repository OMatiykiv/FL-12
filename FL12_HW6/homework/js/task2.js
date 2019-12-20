let a, b, c;
while (!(a > 0)) {
    a = parseFloat(prompt(`enter 'a' side length of the triangle`, ''));
    if (a <= 0) {
        alert('A triangle must have 3 sides with a positive definite length')
    } else if (!a) {
        alert('input values should be ONLY numbers ')
    } 
}
while (!(b > 0)) {
    b = parseFloat(prompt(`enter 'b' side length of the triangle`, ''));
    if (b <= 0) {
        alert('A triangle must have 3 sides with a positive definite length')
    } else if (!b) {
        alert('input values should be ONLY numbers ')
    } 
}
while (!(c > 0)) {
    c = parseFloat(prompt(`enter 'c' side length of the triangle`, ''));
    if (c <= 0) {
        alert('A triangle must have 3 sides with a positive definite length')
    } else if (!c) {
        alert('input values should be ONLY numbers ')
    } 
}
if (a + b <= c || b + c <= a || c + a <= b) {
    console.log('Triangle doesn’t exist')
} else if (a === b && b === c) {
    console.log('Equilateral triangle')
} else if (a === b || b === c || c === a) {
    console.log('Isosceles triangle')
} else {
    console.log('Scalene triangle')
}
