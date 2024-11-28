const express = require('express');
const app = express();
const path = require('path')

app.use(express.static(__dirname + '/public'));


const users = [
    {
        "nombre": "Fernando",
    },
    {
        "nombre": "Carolina",
    }
]

app.get('/api/users', function (req, res) {
    res.json({ 'users': users });
});




app.listen(3000, function () {
    console.log(`Server listening on http://localhost:3000`)
});
