const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const chef = require('./data/chef.json')
const cors = require('cors');
app.get('/', (req, res) =>{
    res.send('The Crazy Mexican is running')
});
app.use(cors());
app.get('/chef', (req, res) => {
    res.send(chef);
})

app.get('/recipe/:id', (req, res) => {
    const id = req.params.id;
    const selectedChef = chef.find(n => n.id === parseInt (id));
    res.send(selectedChef)
    console.log(selectedChef);
})


app.listen(port, () => {
    console.log(`The Crazy Mexican API is running on port: ${port}`)
})