const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
//const db = mysql.createConnection({
  //  host: 'localhost',
    //user: 'root',
    //password: 'root',
    //database: 'fitmart'
//});
const db=mysql.createConnection("mysql://root:AIjKGKXKmwYXGLkiUfxbHTgmecDwVkcD@crossover.proxy.rlwy.net:40530/railway")


db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

// Create Database
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE fitmartdb';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send('Database created...');
    });
});

// Create table
app.get('/createtable', (req, res) => {
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, product name VARCHAR(255), description TEXT,price int, image_url VARCHAR(255),PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send('Posts table created...');
    });
});

// Insert post
app.post('/addpost', (req, res) => {
let post = {
  productname: req.body.productname,
  description: req.body.description,
  price: req.body.price,
  image_url: req.body.image 
};
    let sql = 'INSERT INTO posts SET ?';
    db.query(sql, post, (err, result) => {
        if (err) throw err;
        res.send('Post added...');
    });
});

// Get posts
app.get('/getposts', (req, res) => {
    let sql = 'SELECT * FROM posts';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Get post by id
app.get('/getpost/:id', (req, res) => {
    let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});


// Update post

app.put('/updatepost/:id', (req, res) => {
  const { id } = req.params;
  const { productname, description, price, image_url } = req.body;
const sql = "INSERT INTO products (productname, description, price, ) VALUES (?, ?, ?, )";
  db.query(sql, [productname, description, price, image_url, id], (err, result) => {
    if (err) throw err;
    res.send('Post updated...');
  });
});

// Delete post
app.delete('/deletepost/:id', (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM posts WHERE id = ?`;
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.send('Post deleted...');
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
