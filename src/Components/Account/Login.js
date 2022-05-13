import { Link } from 'react-router-dom';
import next from '../../assets/next.png'

const Login = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-lg w-full">
        <form className="mt-2 flex flex-col">
          <Link className="text-white font-normal" to="/" style={{fontSize: "27px", cursor: "pointer"}}>&lt;</Link>
          <div className="text-white sub-title pt-10">Enter email</div>
          <div className="pt-[5px] font-normal text-[#A7ACB2]"> We'll notify you of important or suspiscious activity on your wallet</div>
          <div className="pt-10" style={{width: "100%"}}><input className="py-4 px-2" type="email" id="email" /></div>
          <div className="pt-[290px] items-center justify-between flex">
            <span className="text-white float-left font-normal text-[15px] leading-[24px]">Why do we ask for this ? </span>
            <button type="submit"><img src={next} alt="next"/></button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;