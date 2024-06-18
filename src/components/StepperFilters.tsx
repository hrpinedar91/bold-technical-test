'use client'


import { cn } from '@/lib/utils';
import React, { useState } from 'react'
import { SlidersVertical } from 'lucide-react';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from './ui/button';



const StepperFilters = () => {


    const [selectedFilter, setSelectedFilter] = useState({
        today: true,
        week: false,
        month: false,
        CobroDatafono: false,
        CobroLinkPagos: false,
        Todos: false,
    });




    const handleFilterClick = (filterKey: string) => {
        setSelectedFilter({
            today: filterKey === 'today',
            week: filterKey === 'week',
            month: filterKey === 'month',
            CobroDatafono: filterKey === 'CobroDatafono',
            CobroLinkPagos: filterKey === 'CobroLinkPagos',
            Todos: filterKey === 'Todos',
        });
    };







    return (
        <div className='flex flex-col items-end gap-2 text-primary-blue'>
            <nav className="flex w-full justify-between items-center gap-x-4 bg-white p-2  font-semibold">
                <div className={cn("flex flex-col py-2 items-center w-1/3 rounded-full", selectedFilter.today && "bg-[#E4E5EE]")}
                    onClick={() => handleFilterClick('today')}
                >
                    <span>Hoy</span>
                </div>
                <div className={cn("flex flex-col py-2 items-center w-1/3 rounded-full", selectedFilter.week && "bg-[#E4E5EE]")}
                    onClick={() => handleFilterClick('week')}
                >
                    <span>Esta semana</span>
                </div>
                <div className={cn("flex flex-col py-2 items-center w-1/3 rounded-full", selectedFilter.month && "bg-[#E4E5EE]")}
                    onClick={() => handleFilterClick('month')}
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
                            <div className={cn("flex py-2 items-center w-full gap-x-4 rounded-full", selectedFilter.CobroDatafono && "bg-[#E4E5EE]")}
                                onClick={() => handleFilterClick('CobroDatafono')}
                            >
                                <Checkbox />

                                <span>Cobro datafono</span>
                            </div>
                            <div className={cn("flex py-2 items-center w-full gap-x-4 rounded-full", selectedFilter.CobroLinkPagos && "bg-[#E4E5EE]")}
                                onClick={() => handleFilterClick('CobroLinkPagos')}
                            >
                                <Checkbox />
                                <span>Cobro link pagos</span>
                            </div>
                            <div className={cn("flex py-2 items-center w-full gap-x-4 rounded-full", selectedFilter.Todos && "bg-[#E4E5EE]")}
                                onClick={() => handleFilterClick('Todos')}
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