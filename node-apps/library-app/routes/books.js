var express = require('express');
var router = express.Router();
// Book Model
const Book = require('../models/Book');

module.exports = router;

// get all books
router.get('/', (req, res) => {
    console.log('books get');
    Book.find()
        .sort({ date: -1 }) // explain 
        .then(books => res.json(books))
});

// db.find();
// db.findOne({id:"ter354rki575yhf"});
// db.findMany();
// db.findAll();

// get one book 
router.get('/:id', (req, res) => {
    console.log('book get');
    Book.findById(req.params.id, req.body, { new: true }, (err, book) => {
        if (err) return res.status(500).send(err);
        return res.send(book);
    }
    );
});

// add a book 
router.post('/', (req, res) => {
    console.log('book post');
    const newBook = new Book({
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
    });
    newBook.save().then(book => res.json(book));
});

// update a book 
router.put('/:id', (req, res) => {
    console.log('book put');
    Book.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, book) => {
        if (err) return res.status(500).send(err);
        return res.send(book);
    }
    );
});

// delete a book 
router.delete('/:id', (req, res) => {
    console.log('book delete');
    Book.findById(req.params.id)
        .then(book => book.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
