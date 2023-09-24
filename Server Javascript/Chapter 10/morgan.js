const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(express.static('public'));
app.use(morgan('combined'));

app.get('*', (request, response) => {
    response.send('명령 프롬프트를 확인해주세요');
});
app.listen(52270, () =>{
    console.log('Server running at http://127.0.0.1:52270');
});