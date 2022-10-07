import React, {useState, useEffect} from 'react'
import {
    useParams, useHistory
} from 'react-router-dom'
import booksService from '../../services/booksService'
import { Form, Button, Input} from 'antd';
import { PageHeader } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

const EditBook = () => {
    const history = useHistory()
    // obtaining isbn for specific book
    const isbn = useParams().isbn
    const [newTitle, setNewTitle] = useState('')
    const [newGenre, setNewGenre] = useState('')
    const [newSummary, setNewSummary] = useState('')
    const [newIsbn, setNewIsbn] = useState('')
    useEffect(() => {
        booksService
            .getBook(isbn)
            .then(book => {
                setNewTitle(book.title)
                setNewGenre(book.genre)
                setNewIsbn(book.isbn)
                setNewSummary(book.summary)
            })
    }, [isbn])

    const updateBook = (values) => {
        const BookObject = {
            title: values.Title,
            genre: values.Genre,
            isbn: values.ISBN,
            summary: values.Summary
        }
        booksService
            .update(newIsbn, BookObject)
            .then(returnedBook => {
            })
    }

    return (
        <div>
            <PageHeader
                onBack={() => history.goBack()}
                title='Editing' 
                subTitle={newTitle}
            />
            <Form
                className='p-14 m-10'
                onFinish={(values) => {
                    updateBook(values)
                    history.goBack()
                }}
                autoComplete='off'
                labelCol={{ span: 3 }}
                // having fields so that form is already filled up by exisiting data
                fields={[
                    {
                        name: ['Title'],
                        value: newTitle
                    },
                    {
                        name: ['Genre'],
                        value: newGenre
                    },
                    {
                        name: ['ISBN'],
                        value: newIsbn
                    },
                    {
                        name: ['Summary'],
                        value: newSummary
                    }
                ]}
            >
                <Form.Item 
                    name='Title' 
                    label='Title'
                    rules= {[
                        {
                            required: true,
                        },
                        { whitespace: true }
                    ]}
                    hasFeedback
                >
                    <Input placeholder='Input Title' />
                </Form.Item>
                <Form.Item 
                    name='Genre' 
                    label='Genre'
                    rules= {[
                        {
                            required: true,
                        },
                        { whitespace: true }
                    ]}
                    hasFeedback
                >
                    <Input placeholder='Input Genre' />
                </Form.Item>
                <Form.Item 
                    name='ISBN' 
                    label='ISBN'
                    rules= {[
                        {
                            required: true,
                        },
                        { whitespace: true },
                    ]}
                    hasFeedback
                >
                    <Input disabled />
                </Form.Item>
                <Form.Item 
                    name='Summary' 
                    label='Summary'
                    rules= {[
                        {
                            required: true,
                        },
                        { whitespace: true }
                    ]}
                    hasFeedback
                >
                    <TextArea rows={5} placeholder='Input Summary' />
                </Form.Item>
                <Form.Item>
                    <button block htmlType='submit' className='w-3/5 p-2 m-10 rounded-lg bg-blue-400 hover:bg-blue-500 font-bold text-white shadow-lg shadow-blue-200 transition ease-in-out duration-200 translate-10'>
                        Simpan
                    </button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default EditBook