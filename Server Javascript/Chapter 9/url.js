const url = require('url'); // 모듈 추출, CommonJS 방식 코드

const parsedObject = url.parse("httl://www.hanbit.co.kr/store/books/look.php?p_code=B4250257160");
console.log(parsedObject);