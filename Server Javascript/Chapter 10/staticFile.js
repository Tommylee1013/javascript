const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('*', (request, response) => {
    response.send(404);
    response.send('해당 경로에는 아무것도 없습니다');
});
app.listen(52270, () => {
    console.log('Server running at http://127.0.0.1:52270')
});