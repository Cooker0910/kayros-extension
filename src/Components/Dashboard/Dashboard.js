import React from 'react';
import { Link } from 'react-router-dom';
import Kayros_logo from '../../assets/logo.png'
import flame from '../../assets/3d-flame-black-wallet-standing 2.png'

function Dashboard() {
  return (
    <>
      <div className="pt-[4rem] text-center">
        <div className="flex justify-center items-center">
          <img className="kayros-logo" src={Kayros_logo} alt="Kayros logo" />
          <span className="kayros text-white">KAYROS</span>
        </div>
        <div className="pt-[50px] flex justify-center">
          <img className="pl-20" src={flame} alt="wallet" data-xblocker="passed" style={{visibility: "visible"}} />
        </div>
        <h1 className="pt-[53px] text-white font-semibold text-[28px] leading-[34px]">Welcome to Kayros</h1>
        <span className="pt-[7px] text-[#A7ACB2] text-[18px] font-normal">The wallet for NFT gamers</span>
        <div className="pt-[56px]">
          <Link to='/register'><div className="btn-primary">Create new wallet</div></Link>
        </div>
        <div className="pt-[17px]" style={{ paddingTop: "17px" }}>
          <Link to="/login"><div className="btn-border">I have a Kayros wallet</div></Link>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
