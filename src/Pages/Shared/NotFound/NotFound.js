import React from 'react'

const NotFound = () => {
    return (
        <section className='px-4 py-12 mx-auto'>
            <div className='d-flex align-items-center mx-auto'>
                <div className=''>
                    <h1 className='mb-2 fw-bold'>
                        Error 404
                    </h1>
                    <h1 className='mb-4 '>
                        Oops! The page you're looking for isn't here.
                    </h1>
                    <p className='mb-5'>
                        You might have the wrong address, or the page may have moved.
                    </p>
                    <button className='w-full mb-2 py-2 px-3 text-white mt-3 btn-design'>
                        Back to homepage
                    </button>
                    <button className='w-full mb-2 py-2 px-3 mt-3 mx-2 btn-design'>
                        Contact me
                    </button>
                </div>
                <div>
                    <div>
                        <img
                            src='https://thumbs.dreamstime.com/b/%C3%B0%C2%BF%C3%B0%C2%B5%C3%B1%E2%80%A1%C3%B0%C2%B0%C3%B1%E2%80%9A%C3%B1%C5%93-134036857.jpg'
                            alt=''
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NotFound;