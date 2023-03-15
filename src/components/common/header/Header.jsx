import React from 'react'
import Head from './Head'
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <Head />
    <header>
        <div className="container paddingSmall">
            <nav>
                <ul className='flex'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">ToHome</Link></li>
                    <li><Link to="/">SameHome</Link></li>
                </ul>
            </nav>
        </div>
    </header>
    </>
    )
}

export default Header