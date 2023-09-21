const express = require('express');
const app = express();
app.get('*', (request, response) => {
    console.log(request.query);
    response.send(request.query);
});

app.listen(52272, () => {
    console.log('Server running at http://127.0.0.1:52272');
});