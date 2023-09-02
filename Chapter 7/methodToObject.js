let primitiveNumber = 273;
Number.prototype.method = function(){
    return 'Primitive Method';
}; // 기본 자료형에 메소드를 추가하는 방법

console.log(primitiveNumber.method());