import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <nav className='navbar bg-body-secondary'>
                <div className="container">
                    <Link to="/" className='navbar-brand'>Webapp react exercise</Link>
                </div>
            </nav>
        </>
    )
}

export default Header