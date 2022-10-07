import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const ViewMoreButton = ({book}) => {
    return (
        <Link to={`/books/${book.isbn}`}>
            <button className='p-2 rounded-lg bg-blue-400 hover:bg-blue-500 font-bold text-white shadow-lg shadow-blue-200 transition ease-in-out duration-200 translate-10"'>
                Lihat Detail
            </button>
        </Link>
    )
}

export default ViewMoreButton