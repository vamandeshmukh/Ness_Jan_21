var express = require('express');
var router = express.Router();

// Book Model
const Book = require('../models/Book');

router.get('/', (req, res) => {
    console.log('book get')
    Book.find()
        .sort({ date: -1 })
        .then(books => res.json(books))
});

router.post('/', (req, res) => {
    console.log('book post')
    const newBook = new Book({
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
    });
    newBook.save().then(book => res.json(book));
});

router.put('/:id', (req, res) => {
    console.log('book put');
    Book.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, book) => {
        if (err) return res.status(500).send(err);
        return res.send(book);
    }
    );
});

router.delete('/:id', (req, res) => {
    console.log('book delete');
    Book.findById(req.params.id)
        .then(book => book.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
