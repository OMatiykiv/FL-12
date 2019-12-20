const two = 2;
const four = 4;
let a = parseFloat(prompt(`enter 'a' in equation ax^2 + bx + c = 0`, ''));
let b = parseFloat(prompt(`enter 'b' in equation ax^2 + bx + c = 0`, ''));
let c = parseFloat(prompt(`enter 'c' in equation ax^2 + bx + c = 0`, ''));
let d = b * b - four * a * c;
let x1 = (- b + Math.sqrt(d)) / (two * a);
let x2 = (- b - Math.sqrt(d)) / (two * a);
if (isNaN(a * b *c)) {
    console.log('Invalid input data')
} else if (a === 0) {
    x1 = - c / b;
    console.log('x =' +x1);
} else if (d < 0) {
    console.log('no solution')
} else if (d === 0) {
    console.log('x =' +x1)
} else if (d > 0) {
    console.log('x1 =' +x1) 
    console.log('x2 =' +x2)
}
