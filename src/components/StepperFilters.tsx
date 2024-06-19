'use client'

import React, { useContext, useState } from 'react';
import { cn } from '@/lib/utils';
import { SlidersVertical } from 'lucide-react';
import { Button } from './ui/button';
import { transactionsContext } from '@/context/TransactionsContext';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';

const StepperFilters = () => {
    const { filter, setFilter, applyFilter } = useContext(transactionsContext);
    const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

    const handleFilterChange = (filter: string) => {
        setSelectedFilter(filter);
        setFilter(filter);
        applyFilter(filter);
    };

    const handleCheckboxClick = (filter: string) => {
        setSelectedFilter(prevFilter => (prevFilter === filter ? null : filter));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleFilterChange(selectedFilter || 'todos');
    };

    return (
        <div className='flex flex-col items-end gap-2 text-primary-blue relative'>
            <nav className="flex w-full justify-between items-center md:gap-x-4 bg-white p-2 font-semibold">
                <div className={cn("flex flex-col py-2 items-center px-4 md:w-1/3 rounded-full", filter === 'today' && 'bg-[#e4e5ee]')}
                    onClick={() => handleFilterChange('today')}
                >
                    <span>Hoy</span>
                </div>
                <div className={cn("flex flex-col py-2 items-center px-4 md:w-1/3 rounded-full", filter === 'week' && 'bg-[#e4e5ee]')}
                    onClick={() => handleFilterChange('week')}
                >
                    <span>Esta semana</span>
                </div>
                <div className={cn("flex flex-col py-2 items-center px-4 md:w-1/3 rounded-full", filter === 'month' && 'bg-[#e4e5ee]')}
                    onClick={() => handleFilterChange('month')}
                >
                    <span>Septiembre</span>
                </div>
            </nav>

            <Collapsible className='bg-white rounded-lg absolute top-16 shadow-xl z-20'>
                <CollapsibleTrigger className='flex w-full justify-end px-8 py-2.5 gap-x-8 text-primary-blue'>
                   <span className='text-primary-blue font-semibold'>
                   FILTRAR
                    </span> 
                    <SlidersVertical size={20} className="ml-2" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <div>
                        <form onSubmit={handleSubmit} className='flex space-y-4 flex-col p-4 px-6'>
                            <div className='flex gap-x-2.5'>
                                <Checkbox
                                    checked={selectedFilter === "cobroDatafono"}
                                    onClick={() => handleCheckboxClick("cobroDatafono")}
                                />
                                <Label htmlFor="cobroDatafono">Cobro Datafono</Label>
                            </div>
                            <div className='flex gap-x-2.5'>
                                <Checkbox
                                    checked={selectedFilter === "cobroLinkPagos"}
                                    onClick={() => handleCheckboxClick("cobroLinkPagos")}
                                />
                                <Label htmlFor="cobroLinkPagos">Cobro con Link Pagos</Label>
                            </div>
                            <div className='flex gap-x-2.5'>
                                <Checkbox
                                    checked={selectedFilter === "todos"}
                                    onClick={() => handleCheckboxClick("todos")}
                                />
                                <Label htmlFor="todos">Todos</Label>
                            </div>
                            {/* <Button type="submit" className='rounded-full bg-red-700 hover:bg-red-700 hover:opacity-65'>Aplicar</Button> */}
                            <Button type="submit" className={`rounded-full bg-red-700 hover:bg-red-700 hover:opacity-65 ${selectedFilter ? '' : 'opacity-50 cursor-not-allowed'}`} disabled={!selectedFilter}>Aplicar</Button>
                        </form>
                    </div>
                </CollapsibleContent>
            </Collapsible>
        </div>
    );
};

export default StepperFilters;
