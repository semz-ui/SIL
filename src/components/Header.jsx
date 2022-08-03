import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { TbWorld } from 'react-icons/tb'
import { MdOutlineSettings } from 'react-icons/md'
import Button from './Button'

function Header() {
  return (
    <div>
    <div className='header'>
        <div className='header_logo'>
            <h1>Logo</h1>
        </div>
        <div className='header_content'>
            <Link to="/swap">
          <div>
            <p>Trade</p>
          </div>
            </Link>
            <p>Earn</p>
            <p>Win</p>
            <p>NFT</p>
            <b>$1000</b>
            <p><TbWorld color='orange' /></p>
            <p><MdOutlineSettings color='orange' size={24} /></p>
            <Button />
        </div>
    </div>
    </div>
  )
}

export default Header