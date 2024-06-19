'use client'

import React, { useContext } from 'react'
import { Info } from 'lucide-react'
import { numberFormat } from '@/helpers/numberFormat'
import { transactionsContext } from '@/context/TransactionsContext'
import { getTitle } from '@/helpers/getTitle'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


const AccountTotal = () => {

    const { totalAmountTransaction, filter } = useContext(transactionsContext)



    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('es-CO', {
        month: 'long',
        day: '2-digit'
    }).replace(/ de /g, ' ');

    return (
        <div className="bg-white w-full md:w-2/5 h-[200px] rounded-xl flex flex-col">
            <div className="flex justify-between items-center bg-custom-gradient-secundary px-4 py-2.5 rounded-t-xl">
                <h3 className="text-white font-semibold text-lg px-4 py-2.5 opacity-90">
                    {getTitle(filter)}
                </h3>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Info className="h-5 w-5 text-white" />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>El total de tus ventas {filter === "today" ? "de hoy" : filter === "week" ? "esta semana" : "de septiembre"}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

            </div>
            <div className="flex flex-col items-center p-8">
                <p className="text-5xl font-bold text-gradient-secundary">
                    {
                        numberFormat(totalAmountTransaction)
                    }
                </p>
                <span className="text-[#353C60]">
                    {
                        filter === 'today' ? formattedDate : filter === 'week' ? 'Esta semana' : filter === 'month' ? 'Septiembre' : 'Total de ventas'
                    }

                </span>
            </div>
        </div>
    )
}

export default AccountTotal