import React, {useState, useEffect} from 'react';
import {
  goBack,
  goTo,
  popToTop,
  Link,
  Router,
  getCurrent,
  getComponentStack,
} from 'react-chrome-extension-router';
import './App.css';
import next from './assets/next.png'
import Kayros_logo from './assets/logo.png'
import confimation from './assets/email (1).png'
import flame from './assets/3d-flame-black-wallet-standing 2.png'
import thank from './assets/comment.png'
import google from './assets/google-drive.png'
import lock from './assets/lock.png'

const chooseCode = () => {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center">
        <div className="max-w-lg w-full">
          <div className="mt-2 flex flex-col">
            <button onClick={goBack} className="text-white font-normal back">&lt;</button>
            <div className="text-white sub-title py-5" style={{fontSize: "22px"}}>
              Choose a passcode to protect your wallet on this device
            </div>
            <div>
              <span className='dot'></span>
              <span className='dot'></span>
              <span className='dot'></span>
              <span className='dot'></span>
              <span className='dot'></span>
              <span className='dot'></span>
            </div>
            <div className="items-center justify-between" style={{textAlign: "end", paddingTop: "180px"}}>
              <button type="submit" onClick={() => goTo(checkRegister)} ><img src={next} alt="next"/></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Thanks = () => {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center">
        <div className="max-w-lg w-full">
          <div className="mt-2 flex flex-col">
            <div className="pt-[90px] flex justify-center">
              <img className="confirm" src={thank} alt="wallet" data-xblocker="passed" style={{visibility: "visible"}} />
            </div>
            <div className="text-white sub-title pt-10">Thanks</div>
            <div className="pt-[60px]">
              <button onClick={() => goTo(chooseCode)}><div className="btn-primary">Open Kayros</div></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const WaitingLock = () => {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center">
        <div className="max-w-lg w-full">
          <div className="mt-2 flex flex-col">
            <button onClick={goBack} className="text-white font-normal back">&lt;</button>
            <div className="pt-[35px] flex justify-center">
              <img className="confirm" src={lock} alt="wallet" data-xblocker="passed" style={{visibility: "visible"}} />
            </div>
            <div className="text-white sub-title pt-10" style={{fontSize: "20px"}}>
              <p>Your wallet will be recovered in ...</p>
              <p className='py-5'>46 hrs 2 mins</p>
            </div>
            <div className="pt-[50px] font-normal text-[#A7ACB2]">
              It takes 48 hours to recover your wallet to a new device. This is a built-in feature of your valut to provide additional security
            </div>
            <div className="pt-[25px]" style={{ paddingTop: "17px" }}>
              <div className="text-white">Contact support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Google = () => {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center">
        <div className="max-w-lg w-full">
          <div className="mt-2 flex flex-col">
            <button onClick={goBack} className="text-white font-normal back">&lt;</button>
            <div className="pt-[35px] flex justify-center">
              <img className="confirm" src={google} alt="wallet" data-xblocker="passed" style={{visibility: "visible"}} />
            </div>
            <div className="text-white sub-title pt-10">Check your email</div>
            <div className="pt-[5px] font-normal text-[#A7ACB2] pb-100">
              <p>This lets you recover your wallet for free.</p><p>You will regain access after 48 hours.</p>
            </div>
            <div className="pt-[25px]">
              <button onClick={() => goTo(WaitingLock)}><div className="btn-primary">Connect to Google Drive</div></button>
            </div>
            <div className="pt-[25px]" style={{ paddingTop: "17px" }}>
              <div className="text-white">Recover with guardians</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const checkRegister = () => {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center">
        <div className="max-w-lg w-full">
          <div className="mt-2 flex flex-col">
            <button onClick={goBack} className="text-white font-normal back">&lt;</button>
            <div className="pt-[35px] flex justify-center">
              <img className="confirm" src={confimation} alt="wallet" data-xblocker="passed" style={{visibility: "visible"}} />
            </div>
            <div className="text-white sub-title pt-10">Check your email</div>
            <div className="pt-[5px] font-normal text-[#A7ACB2] pb-100">
              <p>Please tap the link we sent to</p> <p>email@email.com</p>
            </div>
            <div className="pt-[25px]">
              <button onClick={() => goTo(Thanks)}><div className="btn-primary">Open mail app</div></button>
            </div>
            <div className="pt-[25px]" style={{ paddingTop: "17px" }}>
              <div className="text-white">Not received email?</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const checkLogin = () => {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center">
        <div className="max-w-lg w-full">
          <div className="mt-2 flex flex-col">
            <button onClick={goBack} className="text-white font-normal back">&lt;</button>
            <div className="pt-[35px] flex justify-center">
              <img className="confirm" src={confimation} alt="wallet" data-xblocker="passed" style={{visibility: "visible"}} />
            </div>
            <div className="text-white sub-title pt-10">Check your email</div>
            <div className="pt-[5px] font-normal text-[#A7ACB2] pb-100">
              If there is a Kayros wallet associated with your email@email.com, you will receive a verification link
            </div>
            <div className="pt-[25px]">
              <button onClick={() => goTo(Google)}><div className="btn-primary">Open mail app</div></button>
            </div>
            <div className="pt-[25px]" style={{ paddingTop: "17px" }}>
              <div className="text-white">Not received email?</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Login = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-lg w-full">
        <div className="mt-2 flex flex-col">
          <button onClick={goBack} className="text-white font-normal back">&lt;</button>
          <div className="text-white sub-title pt-10">Enter email</div>
          <div className="pt-[5px] font-normal text-[#A7ACB2]"> We'll notify you of important or suspiscious activity on your wallet</div>
          <div className="pt-10" style={{width: "100%"}}><input className="py-4 px-2" type="email" id="email" /></div>
          <div className="pt-[225px] items-center justify-between flex">
            <span className="text-white float-left font-normal text-[15px] leading-[24px]">Why do we ask for this ? </span>
            <button type="submit" onClick={() => goTo(checkLogin)}><img src={next} alt="next"/></button>
          </div>
        </div>
      </div>
    </div>
  )
}

const Register = () => {

  const [registerEmail, setRegisterEmail] = useState('')

  const Nextpage = () => {
    if (registerEmail === '') {
      alert('enter email')
      return;
    }
    else goTo(checkRegister)
  }

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-lg w-full">
        <div className="mt-2 flex flex-col">
          <button onClick={goBack} className="text-white font-normal back">&lt;</button>
          <div className="text-white sub-title pt-10">Enter email</div>
          <div className="pt-[5px] font-normal text-[#A7ACB2]"> We'll notify you of important or suspiscious activity on your wallet</div>
          <div className="pt-10" style={{width: "100%"}}>
            <input className="py-4 px-2" type="email" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} />
          </div>
          <div className="pt-[225px] items-center justify-between flex">
            <span className="text-white float-left font-normal text-[15px] leading-[24px]">Why do we ask for this ? </span>
            <button type="submit" onClick={Nextpage} ><img src={next} alt="next"/></button>
          </div>
        </div>
      </div>
    </div>
  )
}

const App = () => {

  return (
    <Router>
      <div className="text-center">
        <div className="flex items-center justify-center">
          <img className="kayros-logo" src={Kayros_logo} alt="Kayros logo" />
          <span className="kayros text-white">KAYROS</span>
        </div>
        <div className="pt-[35px] flex justify-center">
          <img className="pl-20" src={flame} alt="wallet" data-xblocker="passed" style={{visibility: "visible"}} />
        </div>
        <h1 className="pt-[50px] text-white font-semibold text-[25px] leading-[34px]">Welcome to Kayros</h1>
        <span className="pt-[7px] text-[#A7ACB2] text-[18px] font-normal">The wallet for NFT gamers</span>
        <div className="pt-[25px]">
          <button onClick={() => goTo(Register)}><div className="btn-primary">Create new wallet</div></button>
        </div>
        <div className="pt-[25px]" style={{ paddingTop: "17px" }}>
          <button onClick={() => goTo(Login)}><div className="btn-border">I have a Kayros wallet</div></button>
        </div>
      </div>
    </Router>
  );
}

export default App;
