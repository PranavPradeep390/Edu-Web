
import React, { useState, useEffect } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import Tagorelogo from '../Assets/Tagorelogo.jpg'
// import FacebookIcon from '@mui/icons-material/Facebook';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import InstagramIcon from '@mui/icons-material/Instagram';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCloseIcon, setShowCloseIcon] = useState(false);

  const handleMenuToggle = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      setTimeout(() => setShowCloseIcon(false), 500); // Match the transition duration
    } else {
      setIsMenuOpen(true);
      setShowCloseIcon(true);
    }
  };

  return (
    <>
      <div className="w-full h-30 p-2 bg-purple-400 md:flex flex-wrap items-center justify-around hidden">
        <div>
          <span className='me-2'>7736965145</span>
          <span className='me-2'>8086029291</span>
          <span className='me-2'>Time - 9:30 am to 3:00 pm</span>
        </div>
        <div>
          <p className='capitalize'>TGRA-38, Tagore Gardens, Kumarapuram, Medical College P.O., Thiruvananthapuram-695011</p>
        </div>
        {/* <div>
          <span style={{color:"light"}}><FacebookIcon/></span>
          <span style={{color:"light"}}><LinkedInIcon/></span>
          <span style={{color:"light"}}><TwitterIcon/></span>
          <span style={{color:"light"}}><InstagramIcon/></span>
        </div> */}
      </div>

      <nav className='p-5 bg-white shadow md:flex md:items-center md:justify-between sticky top-0 z-10 w-full '>
        <div className='flex justify-between items-center'>
          <img className='h-14 inline' src={Tagorelogo} alt="Na" />
          <p className='md:text-2xl md:visible font-semibold md:ms-3 ms-[-140px]' >Tagore Gardens</p>
          <span className='text-3xl cursor-pointer md:hidden block'>
            <button onClick={handleMenuToggle}>
              {showCloseIcon ? <CloseIcon /> : <MoreVertIcon />}
            </button>
          </span>
        </div>

        <ul className={`md:flex md:items-center z-10 md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:pl-0 pl-7 transition-all ease-in duration-500 ${isMenuOpen ? 'top-20 opacity-100' : 'top-[-400px] opacity-0'} md:top-auto md:opacity-100`}>
          <li className='mx-4 my-6 md:my-0 text-xl hover:text-cyan-300 duration-500'>
            <a href="/" style={{fontStyle:"oblique"}}>Home</a>
          </li>
          <li className='mx-4 my-6 md:my-0 text-xl hover:text-cyan-300 duration-500'>
            <a href="/about" style={{fontStyle:"oblique"}}>About</a>
          </li>
          <li className='mx-4 my-6 md:my-0 text-xl hover:text-cyan-300 duration-500'>
          <a href="/events" style={{fontStyle:"oblique"}}>News and Events</a>
          </li>
          <li className='mx-4 my-6 md:my-0 text-xl hover:text-cyan-300 duration-500'>
          <a href="/gallery" style={{fontStyle:"oblique"}}>Gallery</a>
          </li>
          <li className='mx-4 my-6 md:my-0 text-xl hover:text-cyan-300 duration-500'>
            <a href="/contact" style={{fontStyle:"oblique"}}>Contact Us</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
