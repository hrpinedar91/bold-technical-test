'use client'


import { cn } from '@/lib/utils';
import React, { useState } from 'react'
import { SlidersVertical } from 'lucide-react';

const StepperFilters = () => {


    const [selectedFilter, setSelectedFilter] = useState({
        today: true,
        week: true,
        month: false
    });


    
    const handleFilterClick = (filterKey: string) => {
        setSelectedFilter({
            today: filterKey === 'today',
            week: filterKey === 'week',
            month: filterKey === 'month'
        });
    };





  
   
    return (
        <div className='flex flex-col items-end gap-2 text-[#353C60]'>
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

            <div className='bg-white w-fit flex gap-4 px-8 py-2.5 rounded-lg'>
                <span>Filtrar</span>
                <SlidersVertical fill='#353c60' className='h-5 w-5' />
            </div>

        </div>
    )
}

export default StepperFilters