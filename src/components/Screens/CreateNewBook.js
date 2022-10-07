import React from 'react'
import booksService from '../../services/booksService';
import {useHistory} from 'react-router-dom'
import { Form, Button, Input} from 'antd';
import { PageHeader } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

const CreateNewBook = ({books, setBooks}) => {
    const history = useHistory()
    const booksIsbn = books.map(book => book.isbn)
    const addBook = (values) => {
        const BookObject = {
            title: values.Title,
            genre: values.Genre,
            isbn: values.ISBN,
            summary: values.Summary
        }
        booksService
            .create(BookObject)
            .then(newBook => {
            })
    }
    return (
        <div>
            <PageHeader
                onBack={() => history.goBack()}
                title='Tambah Buku Baru' 
            />
            <Form
                className='p-4'
                onFinish={(values) => {
                    addBook(values)
                    history.goBack()
                }}
                autoComplete='off'
                labelCol={{ span: 3 }}
            >
                <Form.Item 
                    name='Title' 
                    label='Judul'
                    rules= {[
                        {
                            required: true,
                        },
                        { whitespace: true }
                    ]}
                    hasFeedback
                >
                    <Input placeholder='Tambahkan Judul' />
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
                    <Input placeholder='Tambahkan Genre' />
                </Form.Item>
                <Form.Item 
                    name='ISBN' 
                    label='ISBN'
                    rules= {[
                        {
                            required: true,
                        },
                        { whitespace: true },
                        ({getFieldValue}) => ({
                            validator(_, value) {
                                if (value.match(/^[0-9._-]+$/) === null){
                                    return Promise.reject(new Error('ISBN hanya bisa diisi dengan angka'))
                                }
                                if (booksIsbn.includes(value)) {
                                    return Promise.reject(new Error('ISBN sudah ada'))
                                } 
                                if (value.replaceAll('-', '').length !== 13) {
                                    return Promise.reject(new Error('ISBN harus sepanjang 13 digit'))
                                }
                                return Promise.resolve()
                            }
                        })
                    ]}
                    hasFeedback
                >
                    <Input placeholder='Tambahkan ISBN maksimal 13 dagit' />
                </Form.Item>
                <Form.Item 
                    name='Summary' 
                    label='Ringkasan'
                    rules= {[
                        {
                            required: true,
                        },
                        { whitespace: true }
                    ]}
                    hasFeedback
                >
                    <TextArea rows={5} placeholder='Tambahkan ringkasan mengenai buku tersebut' />
                </Form.Item>
                <Form.Item  class='items-center'>
                <button htmlType='submit' class="w-4/5 m-10 p-4 rounded-lg bg-blue-400 hover:bg-blue-500 font-bold text-white shadow-lg shadow-blue-200 transition ease-in-out duration-200 translate-10">
                    Tambahkan
                 </button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default CreateNewBook