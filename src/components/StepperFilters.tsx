'use client'


import React, { useContext } from 'react'
import { cn } from '@/lib/utils';
import { SlidersVertical } from 'lucide-react';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from './ui/button';
import { transactionsContext } from '@/context/TransactionsContext';



const StepperFilters = () => {

    const { setFilter, applyFilter, filter } = useContext(transactionsContext);



    const handleFilterChange = (filter: string) => {
        setFilter(filter);
        applyFilter(filter);       
    };


    return (
        <div className='flex flex-col items-end gap-2 text-primary-blue'>
            <nav className="flex w-full justify-between items-center gap-x-4 bg-white p-2  font-semibold">
                <div className={cn("flex flex-col py-2 items-center w-1/3 rounded-full", filter === 'today' && 'bg-[#e4e5ee]')}
                    onClick={() => handleFilterChange('today')}
                >
                    <span>Hoy</span>
                </div>
                <div className={cn("flex flex-col py-2 items-center w-1/3 rounded-full", filter === 'week' && 'bg-[#e4e5ee]')}
                    onClick={() => handleFilterChange('week')}
                >
                    <span>Esta semana</span>
                </div>
                <div className={cn("flex flex-col py-2 items-center w-1/3 rounded-full", filter === 'month' && 'bg-[#e4e5ee]')}
                    onClick={() => handleFilterChange('month')}
                >
                    <span>Septiembre</span>
                </div>

            </nav>


            <Popover>
                    <PopoverTrigger>
                <div className='bg-white w-fit flex gap-4 px-8 py-2.5 rounded-lg'>
                        Filtrar
              
                    <SlidersVertical fill='#353c60' className='h-5 w-5' />
                    <PopoverContent>
                        <div className='flex flex-col gap-2 text-primary-blue font-semibold'>
                            <div className={cn("flex py-2 items-center w-full gap-x-4 rounded-full")}
                                onClick={() => handleFilterChange('CobroDatafono')}
                            >
                                <Checkbox />

                                <span>Cobro datafono</span>
                            </div>
                            <div className={cn("flex py-2 items-center w-full gap-x-4 rounded-full")}
                                onClick={() => handleFilterChange('CobroLinkPagos')}
                            >
                                <Checkbox />
                                <span>Cobro link pagos</span>
                            </div>
                            <div className={cn("flex py-2 items-center w-full gap-x-4 rounded-full")}
                                onClick={() => handleFilterChange('Todos')}
                            >
                                <Checkbox />
                                <span>Ver todos</span>
                            </div>
                            <Button className='bg-[#ed434e] rounded-full mx-12'>Aplicar</Button>
                        </div>
                    </PopoverContent>
                </div>
            </PopoverTrigger>
            </Popover>
        </div>
    )
}

export default StepperFilters