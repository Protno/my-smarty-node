const express = require('express');
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello from mt smarty pant-s')
});
const users = [
    { id: 1, name: 'Sabana', email: 'pi12@gmail.com', phone: '12341234' },
    { id: 2, name: 'Rabana', email: 'pi12@gmail.com', phone: '12341234' },
    { id: 3, name: 'Tabana', email: 'pi12@gmail.com', phone: '12341234' },
    { id: 4, name: 'Uabana', email: 'pi12@gmail.com', phone: '12341234' },
    { id: 5, name: 'Abana', email: 'pi12@gmail.com', phone: '12341234' },
    { id: 6, name: 'Kabana', email: 'pi12@gmail.com', phone: '12341234' },
    { id: 7, name: 'Labana', email: 'pi12@gmail.com', phone: '12341234' },
]
app.get('/users', (req, res) => {
    // filter by search query parameter
    if (req.query.name) {
        const search = req.query.name;
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(matched)

    }
    else {
        res.send(users);

    }
    res.send(users);

});
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = pareInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);

});

app.post('/user', (req, res) => {
    console.log("request", req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user)
})

app.get('/fruits', (req, res) => {
    res.send('mango', 'apple', 'banana')
});



app.get('/fruits/mango/fazle', (req, res) => {
    res.send('sour sound fazle flavor')
})
app.listen(port, () => {
    console.log('Listening to port', port)
});