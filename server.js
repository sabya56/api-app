const express = require('express');
const app = express();
const router = express.Router()
app.use(express.json());

const PREFIX = '/api';

router.get("/", (req, res) => {res.send('Api App')});
router.get("/users/me", (req, res) => {res.send({name:'Sabya'})});
router.get("/users", (req, res) => {
  res.send([
    {name:'Sabya'},
    {name:'Sachin'},
    {name:'Sourav'}
  ])
});
app.use(PREFIX, router);
app.all('*', (req, res) => { res.status(404).send(`Not found (Api App)`)});

const PORT = 3000;
app.listen(PORT);