/* 출력 */
console.log('javascript programming');

/* 숫자 생성*/
console.log(52);
console.log(52.271);

/* 연산자 */
console.log(5 + 3 * 2);

console.log(4 % 3); // 나머지 연산자의 출력 결과는 정수형으로 나온다

/* 문자열 연산 */
console.log('abc' + 'de' + 'fgh');

/* string indexing */
console.log('Hello'[0]);
console.log('Hello'[1]);

/* templete string */
console.log(`52 + 273 = ${52 + 273}`);
console.log(`we live in ${new Date().getFullYear()}.`);

/* Boolean */
console.log(30 > 20 > 10);
console.log(!(30>20>10));

/* Variables */
let pi; // 변수 선언
pi = 3.14159265; // 변수 초기화

let pi2 = 3.14;
console.log(pi); // 3.14159265
console.log(pi2); // 3.14

let radius = 10 ;
console.log(`둘레 : ${2 * pi * radius}`);
console.log(`넓이 : ${pi * radius ** 2}`);

/* 복합 연산자 */
let output= 0;
output += 52;
output += 273;
output += 103;
console.log(output); // 428

