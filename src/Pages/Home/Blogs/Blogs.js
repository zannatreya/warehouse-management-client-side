import React from 'react';
import { Accordion } from 'react-bootstrap';
import { MdQuestionAnswer } from 'react-icons/md';
import { BsQuestionOctagonFill } from 'react-icons/bs'
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-md-12 col-12">
                    <h3 className='text-center'>Question & Answer <MdQuestionAnswer className='answer' /></h3>
                    <div className='my-5'>
                        <Accordion defaultActiveKey={['0']} alwaysOpen>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    Q#1. Difference between javascript and nodejs  <BsQuestionOctagonFill className='question' /></Accordion.Header>
                                <Accordion.Body>
                                    <strong>Javascript</strong>
                                    <p>Javascript is a programming language that is used for writing scripts on the website.
                                        It can only be run in the browsers.It is basically used on the client-side.
                                        It is capable enough to add HTML and play with the DOM.It is used in frontend development.
                                        Some of the javascript frameworks are RamdaJS, TypedJS, etc. It is the upgraded version of ECMA script that
                                        uses Chrome’s V8 engine written in C++.  </p>
                                    <strong>Nodejs</strong>
                                    <p>NodeJS is a Javascript runtime environment.We can run Javascript outside the browser with the help of NodeJS.
                                        It is mostly used on the server-side.Nodejs does not have capability to add HTML tags.It is used in server-side development.
                                        Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm.
                                        Nodejs is written in C, C++ and Javascript.
                                    </p>

                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    Q#3.  Differences between sql and nosql databases. <BsQuestionOctagonFill className='question' />
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>SQL databases are relational, NoSQL databases are non-relational.
                                        SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
                                        SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                                        SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                                        SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    Q#4.  What is the purpose of jwt and how does it work <BsQuestionOctagonFill className='question' />
                                </Accordion.Header>
                                <Accordion.Body>
                                    <strong>JWT</strong>
                                    <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server.
                                        Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic
                                        algorithm to ensure that the claims cannot be altered after the token is issued.</p>

                                    <strong>How does it works</strong>
                                    <p>JWT differ from other web tokens in that they contain a set of claims.
                                        Claims are used to transmit information between two parties.
                                        What these claims are depends on the use case at hand.
                                        For example, a claim may assert who issued the token,
                                        how long it is valid for, or what permissions the client has been granted.
                                        A JWT is a string made up of three parts, separated by dots (.), and serialized using base64.
                                        In the most common serialization format, compact serialization,
                                        the JWT looks something like this: xxxxx.yyyyy.zzzzz.

                                        Once decoded, you will get two JSON strings:

                                        The header and the payload.
                                        The signature. </p>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blogs;