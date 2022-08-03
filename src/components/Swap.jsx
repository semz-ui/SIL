import React from "react";
import "./Swap.css";
import { Link } from 'react-router-dom'
import { SiBinance } from 'react-icons/si'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { FaBtc } from 'react-icons/fa'
import { RiArrowDropDownLine } from 'react-icons/ri'
import Button from "./Button";
import Header from "./Header";


function Swap() {
  return (
    <div className="swap">
      <Header />
      <div className="trade">
          <Link to="/swap">
            <button className="btn2">SWAP</button>
          </Link>
        <Link to="/pool">
          <button className="btn1">LIQUIDITY</button>
        </Link>
      </div>
      <div className="swap__content">
        <div className="swap__content__1">
          <div className="swap__content__1__1">
            <h1>Swap</h1>
          </div>
          <div>
            <p>TRADE TOKEN IN AN INSTANT</p>
          </div>
        </div>
        <div className="swap__content__2">
          <div className="input__content">
            <SiBinance color="orange" size={20} />
            <span>BNB</span>
            <RiArrowDropDownLine size={30} />
          </div>
          <div>
            <input type="text" placeholder="0.00" className="content__input" />
          </div>
        </div>
        <div className="swap__content__3">
          <BsFillArrowRightCircleFill color="orange" size={20} />
        </div>
        <div className="swap__content__2">
          <div className="input__content">
            <FaBtc color="orange" size={20} />
            <span>OVEN SWAP</span>
            <RiArrowDropDownLine size={30} />
          </div>
          <div>
            <input type="text" placeholder="0.00" className="content__input" />
          </div>
        </div>
        <div className="swap__content__5">
          <p className="text">0.5%</p>
          <p>SPILLAGE TOLERANCE</p>
        </div>
        <div className="swap__content__2 swap__content__5">
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Swap;
