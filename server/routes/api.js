const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

/* GET api listing. */
router.get('/records', (req, res) => {
  let records = [
    {id: '1111', title: 'g', content: 'ggg', color: 'lightblue'},
    {id: '1323', title: 'h', content: 'hhh', color: 'pink'},
    {id: '1666', title: 'k', content: 'kkk', color: 'green'}
  ];
  res.json(records);
});

// Get all posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

module.exports = router;
