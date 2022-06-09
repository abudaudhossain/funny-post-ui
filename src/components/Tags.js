import React from 'react'
import { colors } from '../theme/colors'
import Text from './Text'

function Tags() {
    return (
        <div className='mt-5'>
            <Text className="bold" style={{ fontSize: "20px", color: colors.black }}>Tags</Text>
            <div>
                <button type="button" className="btn btn-outline-info m-1" style={{color: colors.primary, fontWeight: 500, textTransform:"uppercase"}}>Education</button>
                <button type="button" className="btn btn-outline-info m-1" style={{color: colors.primary, fontWeight: 500, textTransform:"uppercase"}}>Man</button>
                <button type="button" className="btn btn-outline-info m-1" style={{color: colors.primary, fontWeight: 500, textTransform:"uppercase"}}>Education</button>
                <button type="button" className="btn btn-outline-info m-1" style={{color: colors.primary, fontWeight: 500, textTransform:"uppercase"}}>Man</button>
                <button type="button" className="btn btn-outline-info m-1" style={{color: colors.primary, fontWeight: 500, textTransform:"uppercase"}}>Education</button>
               
               
            </div>
        </div>
    )
}

export default Tags