'use client'

import React, {useContext} from 'react'
import { Info } from 'lucide-react'
import { numberFormat } from '@/helpers/numberFormat'
import { transactionsContext } from '@/context/TransactionsContext'

const AccountTotal = () => {

    const { totalAmountTransaction, filter } = useContext(transactionsContext)

    console.log(totalAmountTransaction)

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('es-CO', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });


    const getTitle = (filter: any) => {
        switch (filter) {
            case 'today':
                return 'Total de ventas de hoy';
            case 'week':
                return 'Total de ventas de la semana';
            case 'month':
                return 'Total de ventas del mes de septiembre';
            default:
                return 'Total de ventas'; // Valor por defecto
        }
    };

    
    return (
        <div className="bg-white w-2/5 rounded-xl flex flex-col">
            <div className="flex justify-between items-center bg-custom-gradient-secundary px-4 py-2.5 rounded-t-xl">
                <h3 className="text-white font-semibold text-lg px-4 py-2.5 opacity-90">
                    {getTitle(filter)}
                </h3>
                <Info className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col items-center p-8">
                <p className="text-3xl font-bold text-gradient-secundary">
                    {
                        numberFormat(totalAmountTransaction)
                    }
                </p>
                <span className="text-[#353C60]">{formattedDate}</span>
            </div>
        </div>
    )
}

export default AccountTotal