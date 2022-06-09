import React from 'react'
import '../assets/styles/text.css'
 
export default function Text({children, style = {}, preset = ''}) {
    
    if(preset ==="title"){ 
       return <h1 className='bold title' style={style}>{children}</h1>
    }
    else if(preset === "sub-title"){ 
        return <h3 className='sub-title bold' style={style}>{children}</h3>
    }
    return ( 
        <p className='text' style={style}> {children}</p>
    )
}
