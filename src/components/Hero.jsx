import React from 'react'

export const Hero = () => {
  return (
    <>
        <section className='py-5 font-inter text-base'>
            <div className='container  flex flex-wrap items-center justify-center mx-auto mt-10 md:-12 md:flex-row'>
                <div className='mb-14 lg:mb-0 lg:w-1/2'>
                    <h1 className='
                        font-semibold 
                        max-w-lx 
                        leading-none
                        text-center 
                        lg:text-[4.5rem]
                        lg:text-left lg:leading-tight
                        mb-1
                    '                   
                    >Bienvenidos a</h1>
                    <p className='max-w-lx 
                        font-semibold 
                        leading-none
                        text-center
                        lg:text-[4.5rem]
                        lg:text-left lg:leading-tight
                        mb-1
                        bg-gradient-to-r from-primary via-secundary to-gr-secundary inline-block text-transparent bg-clip-text animate-gradient
                        '>Carlei</p>
                    <p className='max-w-lx 
                        font-semibold 
                        leading-none
                        text-center 
                        lg:text-[4.5rem]
                        lg:text-left lg:leading-tight
                        mb-3
                        bg-gradient-to-r from-primary via-secundary to-gr-secundary inline-block text-transparent bg-clip-text animate-gradient
                        '>Telecomunicaciones.</p>
                        <p className=' text-primary-p text-[1.25rem]'>
                            Somos una empresa proveedora que realiza servicios de instalación, mantenimiento y posventa de la red HFC/FTTH en casa, a nivel nacional.
                        </p>
                </div>

    

            </div>
        </section>
    </>
  )
}
