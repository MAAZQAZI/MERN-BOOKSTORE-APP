const Book = require('../models/Book');

const getAllBooks = async (req, res) => {
    let books;
    try {
        books = await Book.find();
    } catch (error) {
        console.log(error);
    }

    if (!books) {
        return res.status(404).json({ message: 'No products found' });
    } else {
        return res.status(200).json({books});
    }
};

const addBooks = async (req, res) => {


    try {
        const { name, author, description, price, available, image } = req.body;
        const book = new Book({
            name,

            author,

            description,

            price,

            available,
            image
        });
        await book.save();
        return res.status(201).json({book});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }

}

const getBookbyid = async (req, res) => {

    const id = req.params.id;
    let book;
    try {

        book = await Book.findById(id);
        res.status(200).json(book);
    } catch (error) {
        console.log(error);
    }
}
const updateBook = async (req, res) => {

    const id = req.params.id;
    let book;
    try {
        book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        const { name, author, description, price, available ,image} = req.body;
        book.name = name;
        book.author = author;
        book.description = description;
        book.price = price;
        book.available = available;
        book.image = image;
        await book.save();
        return res.status(200).json({book});
    } catch (error) {
        console.log(error);
    }
}
const deleteBook = async (req, res) => {

    const id = req.params.id;
    let book;
    try {

        book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        await book.remove();
        return res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
        console.log(error);
    }
}




exports.getAllBooks = getAllBooks;
exports.addBooks = addBooks;
exports.getBookbyid = getBookbyid;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;