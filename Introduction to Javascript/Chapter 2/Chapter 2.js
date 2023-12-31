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

let output1 = 'hello ';
output1 += 'world ';
output1 += '!';
console.log(output1);

/* 증감 연산자 */
let number = 10;
number ++;
console.log(number); // 11
number --;
console.log(number); // 10
console.log(--number); // 9
console.log(number--); // 9, 저장은 8로 된다

/* 식별 연산자 (자료형 검사) */
console.log(typeof 1); // number
console.log(typeof 'Sognag'); //string
console.log(typeof 1.2); //number
console.log(typeof({})); //object
console.log(typeof(function () {})); //function
console.log(typeof(let)); //undefined
// undefined data type은 초기화되지 않은 것과 선언하지 않은 것으로 나뉜다

/* 형 변환 */
console.log(Number('1'));
console.log(String(1));
console.log(Boolean(0));
console.log(Number('string')); //NaN, Not a Number
console.log(isNaN(Number('string'))); //ture
// isNaN() 함수는 NaN인지 아닌지 식별한다

/* 자동 형변환 */
console.log('52' + 173); //string
console.log('52' - 173); //number
console.log(!!NaN); //boolean

/* 일치 연산자 */
//자료형의 type까지 맞춰서 비교하는 연산자를 의미한다
console.log(`52 == '52' : ${52 == '52'}`);
console.log(`52 === '52' : ${52 === '52'}`);

/* Constant */
const pi_const = 3.14195265;
console.log(pi_const);