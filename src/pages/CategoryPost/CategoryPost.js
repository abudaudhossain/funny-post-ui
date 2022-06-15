import React from 'react'
import { useParams } from 'react-router-dom'

export default function CategoryPost() {
    const {category} = useParams();

    return (
        <div>
            <h1>{category}</h1>
        </div>
    )
}
