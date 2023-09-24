const express = require('express');
const app = express();
// Server starting
app.listen(52271, () => {
    console.log('Server Running at http://127.0.0.1:52271');
});
// Add middleware
app.use(express.urlencoded({
    extended : false
}));
// variable declaration
let userCounter = 0;
const users = [];

// Routing
app.get('/user', (request, response) => {
    response.send(users);
});
app.get('/user/:id', (request, response) => {
    // variable declaration
    const id = request.params.id;
    // finding data
    const filtered = users.filter((user) => user.id == id);
    // response
    if (filtered.length == 1) response.send(filtered[0]);
    else response.status(404).send('데이터가 존재하지 않습니다');
});

//Posting
app.post('/user', (request, response) => {
    const body = request.body;
    if (!body.name) return response.status(400).send('name을 보내주세요');
    else if (!body.region) return response.status(400).send('region을 보내주세요');

    // variable extraction
    const name = body.name;
    const region = body.region;

    // Save data
    const data = {
        id : userCounter++,
        name : name,
        region : region
    };
    users.push(data);
    // response
    response.send(data);
});

// Putting
app.put('/user/:id', (request, response) => {
    // find ID
    const id = request.params.id
    const user = users.find((user) => user.id == id)
    if (user) {
        if (request.body.name) users[id].name = request.body.name;
        if (request.body.region) users[id].region = request.body.region;
        // response
        response.send(user);
    } else {
        response.status(404).send('데이터가 존재하지 않습니다');
    }
});

// Deleting
app.delete('/user/:id', (request, response) => {
    const id = request.params.id
    const index = users.findIndex((user) => user.id == id)
    if (index != 1){
        users.splice(index, 1);
        response.send('제거했습니다.');
    } else {
        response.status(404).send('데이터가 존재하지 않습니다');
    }
});