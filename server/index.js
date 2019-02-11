const express = require('express');

const app = express();
const { getProduct } = require('../database/index.js');
const { addToCart } = require('../database/index.js');
const { itemsInCart } = require('../database/index.js');

app.use(express.static('./client/dist'));

const PORT = 3002;

app.listen(PORT, console.log('listening at 3002'));


app.get('/product/:id', (req, res) => {
  const idToSearch = req.params.id;
  console.log('idToSearch', idToSearch);
  getProduct(idToSearch, (err, data) => {
    if (err) {
      res.status(400).send();
      return;
    }
    res.status(200).send(data);
  });
});

app.put('/product/:id', (req, res) => {
  // need to get the amount selected from the drop down menu from client
  const idToSearch = req.params.id;
  addToCart(idToSearch, (err, data) => {
    if (err) {
      res.status(400).send();
      return;
    }
    res.status(200).send(data);
  });
});

app.get('/addtocart', (req, res) => {
  itemsInCart((err, data) => {
    if (err) {
      res.status(400).send();
      return;
    }
    res.status(200).send(data);
  });
});