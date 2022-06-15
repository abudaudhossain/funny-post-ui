import React from 'react'
import { useNavigate } from "react-router-dom";
import UseUser from '../../hooks/UseUser';

export default function MyAccount() {
  const { user } = UseUser();
  
  return (
    <div>MyAccount</div>
  )
}
