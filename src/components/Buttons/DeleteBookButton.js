import { Button } from 'antd'
import React from 'react'
import booksService from '../../services/booksService'

const DeleteBookButton = ({isbn, setBooks, books}) => {

    const deleteBook = (isbn) => {
        booksService
            .remove(isbn)
            .then(response => {
                setBooks(books.filter(book => book.isbn !== isbn))
            })
    }

    return (
        <button className='p-2 rounded-lg bg-red-400 hover:bg-red-500 font-bold text-white shadow-lg shadow-blue-200 transition ease-in-out duration-200 translate-10"' onClick={() => deleteBook(isbn)}>
            Hapus
        </button>
    )
}

export default DeleteBookButton