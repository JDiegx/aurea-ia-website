import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='text-black'>
            <h1>404 - NotFound</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <p>
                You can go back to the <Link to="/">home page</Link>.
            </p>
        </div>
    )
}

export default NotFound