import React from 'react'
import { Info } from 'lucide-react'
import { numberFormat } from '@/helpers/numberFormat'

const AccountTotal = () => {
    return (
        <div className="bg-white w-2/5 rounded-xl flex flex-col">
            <div className="flex justify-between items-center bg-custom-gradient-secundary px-4 py-2.5 rounded-t-xl">
                <h3 className="text-white font-semibold text-lg px-4 py-2.5 opacity-90">Total de ventas de hoy</h3>
                <Info className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col items-center p-8">
                <p className="text-3xl font-bold text-gradient-secundary">
                    {
                        numberFormat(1560000)
                    }
                </p>
                <span className="text-[#353C60]">Septiembre 21</span>
            </div>
        </div>
    )
}

export default AccountTotal