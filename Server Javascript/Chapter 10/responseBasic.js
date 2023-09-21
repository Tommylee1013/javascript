const express = require('express');
const app = express();

app.get('*', (request, response) => {
    response.status(404);
    response.set('methodA', 'ABCDE');
    response.set({
        'methodB1' : 'FGHIJ',
        'methodB2' : 'KLMNO'
    });
    response.send('안녕하세요! javascript는 처음이네요');
});

app.listen(52275, () => {
    console.log("Server running at http://127.0.0.1:52275");
});