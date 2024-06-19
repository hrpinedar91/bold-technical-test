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
import { Calculator, Link } from 'lucide-react'
import { Icons } from './Icons'
import { useContext } from 'react'
import { transactionsContext } from '@/context/TransactionsContext'
import { getTitle } from '@/helpers/getTitle'


const TableContent = () => {

    const {filteredTransactions, filter} = useContext(transactionsContext)
    return (
        <div className='w-full'>
            <div className='bg-custom-gradient-table px-12 py-2 rounded-t-xl'>
                <p className='text-white text-2xl'>
                    {getTitle(filter)}
                </p>
            </div>
            <Table>
                <TableHeader>
                    <TableRow className='bg-white text-primary-blue font-semibold text-center'>
                        <TableHead>Transacción</TableHead>
                        <TableHead>Fecha y hora</TableHead>
                        <TableHead>Método de pago</TableHead>
                        <TableHead>ID Transacción Bold</TableHead>
                        <TableHead>Monto</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className='bg-white'>
                    {filteredTransactions.map((dato, index) => (
                        <TableRow key={index} className='w-full md:flex-row md:w-full border-l-2 border-b-0 border-primary-blue'>
                                                
                              
                               
                                <TableCell className='flex gap-2.5 text-[#353C60]'>
                                    {dato.transaccion === 'Cobro exitoso' ? <Link fill='white' className='h-5 w-5' />  : <Calculator fill='white' className='h-5 w-5' />}
                                    {dato.transaccion}
                                </TableCell>
                                
                              
                            
                            <TableCell>{dato.fecha_y_hora}</TableCell>
                            <TableCell>
                                <div className='flex gap-2.5'>
                                    <Icons.masterCard className='h-5 w-5' />
                                    {dato.metodo_de_pago}
                                </div>
                                
                                    {
                                        dato.cobroDatafono ? <span className='font-semibold pl-9'>Datafono</span> : dato.cobroLinkPagos && <span className='font-semibold pl-9'>Link de pagos</span>
                                    }
                            
                            </TableCell>
                            <TableCell>{dato.id_transaccion_bold}</TableCell>
                            <TableCell>{dato.monto.total}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                

            </Table>
        </div>
    )
}

export default TableContent