const express = require('express');
const app = express();
app.get('*', (request, response) => {
    response.redirect('http://hanbit.co.kr');
});
app.listen(52271, () =>{
    console.log('Server running at http://127.0.0.1:52271');
});