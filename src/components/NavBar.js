import React from 'react';
import { FiMenu } from 'react-icons/fi';

const NavBar = () => {
  return (
    <div className='fixed top-0 left-0 w-full h-20 bg-slate-900 shadow-md flex items-center justify-center'>
        <button onClick={() => {console.log('I am a fake button')}}
            className='ml-5 fixed left-0'    
        >
            <FiMenu className='size-10'/>
        </button>
        <img src='lazadaLogo.svg' alt='Lazada logo'
            className='size-10'    
        />

    </div>
  )
}

export default NavBar;

