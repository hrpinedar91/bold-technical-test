'use client'

import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Calculator, Icon, Link } from 'lucide-react'
import { Icons } from './Icons'
import { useContext } from 'react'
import { transactionsContext } from '@/context/TransactionsContext'
import { getTitle } from '@/helpers/getTitle'


const TableContent = () => {

    const { filteredTransactions, filter } = useContext(transactionsContext)
    return (
        <div className='w-full'>
            <div className='bg-custom-gradient-table px-4 md:px-12 py-2 rounded-t-xl'>
                <p className='text-white text-lg md:text-2xl'>
                    {getTitle(filter)}
                </p>
            </div>
            <Table>
                <TableHeader className='hidden md:table-header-group'>
                    <TableRow className='bg-white text-primary-blue md:text-lg font-semibold text-center'>
                        <TableHead>Transacción</TableHead>
                        <TableHead>Fecha y hora</TableHead>
                        <TableHead>Método de pago</TableHead>
                        <TableHead>ID Transacción Bold</TableHead>
                        <TableHead>Monto</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className='bg-white text-lg'>
                    {filteredTransactions.map((dato, index) => (
                        <TableRow key={index} className='hidden md:table-row md:items-center md:align-middle md:w-full border-l-2 border-b-0 border-primary-blue'>


                            <TableCell className='text-[#353C60]'>
                                <div className='flex gap-2.5'>
                                    {dato.transaccion === 'Cobro exitoso' ? <Link fill='white' className='h-5 w-5' /> : <Calculator fill='white' className='h-5 w-5' />}
                                    {dato.transaccion}

                                </div>
                            </TableCell>



                            <TableCell>{dato.fecha_y_hora}</TableCell>
                            <TableCell>
                                <div className='flex gap-2.5'>

                                    {
                                        dato.metodo_de_pago.includes('Visa') ? <Icons.visa className='h-5 w-5' /> : dato.metodo_de_pago.includes("Amex") ? <Icons.amex className='h-5 w-5' /> : <Icons.masterCard className='h-5 w-5' />
                                    }


                                    {dato.metodo_de_pago}
                                </div>

                                {
                                    dato.cobroDatafono ? <span className='font-semibold pl-9'>Datafono</span> : dato.cobroLinkPagos && <span className='font-semibold pl-9'>Link de pagos</span>
                                }

                            </TableCell>
                            <TableCell>{dato.id_transaccion_bold}</TableCell>
                            <TableCell className="flex flex-col">
                                <span>
                                    {dato.monto.total}
                                </span>
                                <span>
                                    {dato.monto.deduccion}
                                </span>
                                <span className={Number(dato.monto.comision) < 0 ? "text-red-600" : ""}>
                                    {dato.monto.comision}
                                </span>
                            </TableCell>
                        </TableRow>
                    ))}
                    {
                        filteredTransactions.map((dato, index) => (
                            <TableRow key={index} className='grid grid-cols-2 items-center text-pretty text-primary-blue md:hidden '>
                                <TableCell className='flex items-center gap-2.5 text-[#353C60]'>Transacción:</TableCell>
                                <TableCell className='flex flex-col items-start gap-2.5 text-[#353C60] font-bold'>
                                    {dato.transaccion === 'Cobro exitoso' ? <Link fill='white' className='h-5 w-5' /> : <Calculator fill='white' className='h-5 w-5' />}
                                    {dato.transaccion}
                                </TableCell>
                                <TableCell className='flex gap-2.5 text-[#353C60]'>Fecha y hora:</TableCell>
                                <TableCell className="font-bold">{dato.fecha_y_hora}</TableCell>
                                <TableCell className='flex gap-2.5 text-[#353C60]'>Método de pago:</TableCell>
                                <TableCell>
                                    <div className='flex flex-col items-start gap-2 font-bold'>
                                        {
                                            dato.metodo_de_pago.includes('Visa') ? <Icons.visa className='h-5 w-5' /> : dato.metodo_de_pago.includes("Amex") ? <Icons.amex className='h-5 w-5' /> : <Icons.masterCard className='h-5 w-5' />
                                        }

                                        {dato.metodo_de_pago}
                                    </div>
                                    {
                                        dato.cobroDatafono ? <span className='font-bold'>Datafono</span> : dato.cobroLinkPagos && <span className='font-bold'>Link de pagos</span>
                                    }

                                </TableCell>
                                <TableCell className='flex gap-2.5 text-[#353C60]'>ID Transacción Bold:</TableCell>
                                <TableCell className="font-bold">{dato.id_transaccion_bold}</TableCell>
                                <TableCell className='flex gap-2.5 text-[#353C60]'>Monto:</TableCell>
                                <TableCell className="font-bold flex flex-col">
                                    <span>
                                        {dato.monto.total}
                                    </span>
                                    <span>
                                        {dato.monto.deduccion}
                                    </span>
                                    <span className={Number(dato.monto.comision) < 0 ? "text-red-600" : ""}>
                                        {dato.monto.comision}
                                    </span>

                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>


            </Table>
        </div>
    )
}

export default TableContent