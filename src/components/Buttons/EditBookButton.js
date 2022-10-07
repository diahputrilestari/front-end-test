import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'


const EditBookButton = ({book}) => {
    return (
        <Link to={`/books/edit/${book.isbn}`}>
            <button className='p-2 rounded-lg bg-green-400 hover:bg-green-500 font-bold text-white shadow-lg shadow-blue-200 transition ease-in-out duration-200 translate-10'>
                Edit
            </button>
        </Link>
    )
}

export default EditBookButton