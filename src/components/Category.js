import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/category.css'

export default function Category({ title, amount }) {
    return (
        <Link to={`/post/${title}`} className="category">
            <p>{title}</p>
            <p>({amount})</p>
        </Link>
    )
}
