import React, { useState } from 'react'
import carleiLogo from '../img/carleiLogo.png';
export const Header = () => {

  const [open, setOpen] = useState(false);

  return (
    <>
      <header className='py-0 font-inter font-[500] text-base border-b-2'>
        <nav className='flex justify-between items-center w-[90%] mx-auto'>
          <div>
            <img className='w-[8.5rem]' src={carleiLogo} alt="" />
          </div>
          <div className='md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5'>
            <ul className='flex md:flex-row flex-col md:items-center md:gap-[3vw] gap-8'>
              <li>
                <a className='ease-in-out delay-200 duration-300 hover:text-primary' href="">Inicio</a>
              </li>
              <li>
                <a className='ease-in-out delay-200 duration-300 hover:text-primary' href="">Quienes somos?</a>
              </li>
              <li>
                <a className='ease-in-out delay-200 duration-300 hover:text-primary' href="">Servicios</a>
              </li>
              <li>
                <a className='ease-in-out delay-200 duration-300 hover:text-primary' href="">Valores</a>
              </li>
            </ul>
          </div>
            <div className='relative'>
              <div className='px-1.5 py-2 absolute inset-0 bg-primary blur-sm rounded'></div>
                <button className=' relative bg-primary text-white px-3.5 py-1.5 rounded'>Contactanos</button>
            </div>
          <div onClick={()=>setOpen(!open)} className='cursor-pointer md:hidden transition-shadow'>
            {
              open ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round md:hidder" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

              ) : (
                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path  stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                
              )
            }
          </div>
        </nav>
        {
          open && (
            <div className='md:static absolute bg-white md:min-h-fit min-h-[20vh] left-0  md:w-auto w-full flex items-center px-5'>
            <ul className='flex md:flex-row flex-col md:items-center md:gap-[3vw] gap-8'>
              <li>
                <a className='ease-in-out delay-200 duration-300 hover:text-primary' href="">Inicio</a>
              </li>
              <li>
                <a className='ease-in-out delay-200 duration-300 hover:text-primary' href="">Quienes somos?</a>
              </li>
              <li>
                <a className='ease-in-out delay-200 duration-300 hover:text-primary' href="">Servicios</a>
              </li>
              <li>
                <a className='ease-in-out delay-200 duration-300 hover:text-primary' href="">Valores</a>
              </li>
            </ul>
          </div>
          )
          }
      </header>
    
    </>
  )
}
