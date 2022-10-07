import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const CreateBookButton = () => {
    return (
        <Link to='/books/create'>
         
            <button class="p-2 rounded-lg bg-blue-400 hover:bg-blue-500 font-bold text-white shadow-lg shadow-blue-200 transition ease-in-out duration-200 translate-10">
                 Tambahkan List
</button>
        </Link>
    )
}

export default CreateBookButton