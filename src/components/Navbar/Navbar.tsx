import React from 'react'
import Link from 'next/link'
import { Icons } from '../Icons'
import { CircleHelp } from 'lucide-react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


const Navbar = () => {
    return (       
            <header className='relative border-b bg-custom-gradient-primary py-4 px-4 md:px-12 backdrop-blur-md transition-all'>
                <div className='py-2 border-gray-200'>
                    <div className='flex justify-between items-center md:flex-col'>
                        <div className='flex gap-8 md:flex-row md:w-full justify-between'>
                            <div className='md:ml-4 flex lg:ml-0'>
                                <Link href='/'>
                                    <Icons.logo className='h-10 w-10' />
                                </Link>
                            </div>                           
                            <div className='ml-auto flex items-center gap-4 md:gap-x-8 opacity-80'>
                                <Link className='cursor-pointer' href='/mi-negocio'>
                                    <span className='text-white text-lg'>Mi negocio</span>
                                </Link>
                                <Link className='flex items-center gap-2.5 cursor-pointer' href='/ayuda'>
                                    <span className='text-white text-lg md:ml-4'>Ayuda</span>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <CircleHelp className='h-5 w-5 text-white' />

                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Nuestro equipo puede ayudarte en nuestros canales de atención</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>                
            </header >
    )
}

export default Navbar