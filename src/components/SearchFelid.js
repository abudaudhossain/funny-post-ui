import React from 'react'
import { colors } from '../theme/colors'

export default function SearchFelid() {
  return (
    <div className="input-group">
      <div className="form-outline">
        <input type="search" id="form1" className="form-control" placeholder='Type Key word' />
      </div>
      <button type="button" className="btn" style={{ background: colors.bgBtn }}>
        <i className="fas fa-search"></i>
      </button>
    </div>
  )
}
