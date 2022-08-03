import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

function Pool() {
  return (
    <div>
        <Header />
        <div className="trade">
            <Link to="/swap">
                <button className="btn1">SWAP</button>
            </Link>
            <Link to="/pool">
                <button className="btn2">LIQUIDITY</button>
            </Link>
        </div>
    </div>
  )
}

export default Pool