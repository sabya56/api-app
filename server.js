const express = require('express');
const app = express();
app.use(express.json());


app.get("/", (req, res) => {
  res.send('Api App')
})

app.get("/users/me", (req, res) => {
  res.send({name:'Sabya'})
})

app.get("/users", (req, res) => {
  res.send([
    {name:'Sabya'},
    {name:'Sachin'},
    {name:'Sourav'}
  ])
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});