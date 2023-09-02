let string = 'Hello';

console.log(string.charAt(2)); // l
console.log(string.charCodeAt(2)); // unicode of 'l'
console.log(string.concat(' world!')); // Hello world!
console.log(string.indexOf('l')); // 2
console.log(string.lastIndexOf('l')); // 3
console.log(string.match()); // search regExp
console.log(string.slice(0, 2)); // Hel
console.log(string.split('l'));
console.log(string.substring(1, 3)); // el
console.log(string.toLowerCase()); // hello
console.log(string.toUpperCase()); // HELLO

if (string.indexOf('Hello') >= 0){
    console.log('Good Morning sir...!');
}