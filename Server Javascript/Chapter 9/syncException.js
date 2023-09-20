const fs = require('fs');

try {
    const file = fs.fileReadSync('none.txt');
    console.log(file);
    console.log(file.toString());
} catch (exception) {
    console.log('파일을 읽어오는데 문제가 발생했습니다');
    console.log(exception);
}