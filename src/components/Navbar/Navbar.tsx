import React from 'react'
import { Icons } from '../Icons'
import Link from 'next/link'
import { CircleHelp } from 'lucide-react'

const Navbar = () => {
    return (
        <div>
            <header className='relative border-b bg-custom-gradient-primary py-4 px-8 md:px-12 backdrop-blur-md transition-all'>
                <div className='py-2 border-gray-200'>
                    <div className='flex justify-between items-center md:flex-col'>
                        {/* <MobileNav /> */}

                        <div className='flex flex-col md:flex-row md:w-full justify-between'>
                            <div className='ml-4 flex lg:ml-0'>
                                <Link href='/'>
                                    <Icons.logo className='h-10 w-10' />
                                </Link>
                            </div>

                            <div className='hidden lg:ml-8 lg:block lg:self-stretch'>
                                {/* <NavItems /> */}
                            </div>

                            <div className='ml-auto flex items-center gap-x-8 opacity-80'>
                                <Link className='cursor-pointer' href='/'>
                                    <span className='text-white text-lg'>Mi negocio</span>
                                </Link>
                                <Link className='flex items-center gap-2.5 cursor-pointer' href='/'>
                                    <span className='text-white text-lg ml-4'>Ayuda</span>
                                    <CircleHelp className='h-5 w-5 text-white' />
                                </Link>
                                

                            </div>




                          



                        </div>
                    </div>
                </div>

        </header >
       
        
    </div >
  )
}

export default Navbar