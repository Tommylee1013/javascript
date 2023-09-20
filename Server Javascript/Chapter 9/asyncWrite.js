const fs = require('fs');

fs.writeFile('output2.txt', '안녕하세요! 반가워요', (error) =>{
    console.log('파일 쓰기를 완료하였습니다');
});