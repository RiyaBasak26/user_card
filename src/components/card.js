import React from 'react'
import './card.css'

const card=(props)=> {
  return (
    <div className='uderDetailDiv'>
    <div><label className='label'>User Name: </label><span>{props.userDetail.name}</span></div>
    <div><label className='label'>Email: </label><span>{props.userDetail.email}</span></div>
    <div><label className='label'>City: </label><span>{props.userDetail.address.city}</span></div>
    </div>
  )
}

export default card