import React from 'react'
import { NavLink } from 'react-router-dom'

import '../assets/styles/menubar.css'

export default function Menubar() {
    let activeStyle = {
        color: '#1eafed',
        textDecoration: 'underline'
    }
    return (
        <nav className='menu'>
            <NavLink to='/'
                style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }
            >Home</NavLink>
            <NavLink to='/myPost'
                style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }
            >My Post</NavLink>
            <NavLink to='/post/fashion'
                style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }
            >Fashion</NavLink>
            <NavLink to='/post/travel'
                style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }
            >Travel</NavLink>
            <NavLink to='/about'
                style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }
            >About</NavLink>
        </nav>
    )
}
