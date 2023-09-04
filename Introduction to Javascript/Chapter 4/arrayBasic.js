let array = [52, 273, 'Breakfast', 'Lunch', true, false]

array[0] = 0

for (let i = 0; i < 7; i++){
    console.log(array[i]);
} // index 범위를 넘어가도 오류가 나지 않고 undefined를 출력한다

console.log(array); // array 모두 출력
console.log(array.length); // attribute of array